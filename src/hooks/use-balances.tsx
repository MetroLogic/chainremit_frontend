import React, { useEffect } from 'react'
import { queryRpcData } from './rpc-utils'
import { useAccount, useNetwork, useProvider } from '@starknet-react/core'


type CURRENCY_TYPE = {
      symbol: string;
      name: string;
      address: string;
}

type CURRENCIES_AVAILABLE = "USDC" | "STRK" | "ETH"

type CURRENCIES_TYPE = Record<CURRENCIES_AVAILABLE, CURRENCY_TYPE>

const CURRENCIES: Record<"sepolia" | "mainnet", CURRENCIES_TYPE> = {
  "sepolia": {
    "USDC": {
      symbol: "USDC",
      name: "USD Coin",
      address: "0x0028729b12ce1140cbc1e7cbc7245455d3c15fa0c7f5d2e9fc8e0441567f6b50"
    },
    "STRK": {
      symbol: "STRK",
      name: "Starknet Coin",
      address: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d"
    },
    "ETH": {
      symbol: "ETH",
      name: "Ether",
      address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
    },
  },
  "mainnet": {
    "USDC": {
      symbol: "USDC",
      name: "USD Coin",
      address: "0x053C91253BC9682c04929cA02ED00b3E423f6710D2ee7e0D5EBB06F3eCF368A8"
    },
    "STRK": {
      symbol: "STRK",
      name: "Starknet Coin",
      address: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d"
    },
    "ETH": {
      symbol: "ETH",
      name: "Ether",
      address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
    },
  },
} 

const RPC_URL = {
	"mainnet": "https://starknet-mainnet.public.blastapi.io/rpc/v0_8",
	"sepolia": "https://starknet-sepolia.public.blastapi.io/rpc/v0_8"
}

type IUseBalances = {
	ownerAddress?: string,
}

export const useBalances = ({ ownerAddress }: IUseBalances) => {

	const { chain } = useNetwork()

	const currentCurrencies = CURRENCIES[(chain.network as "mainnet" | "sepolia") ?? "mainnet"]

	const tokenAddresses = Object
	.values(currentCurrencies)
	.map(
		(value: CURRENCY_TYPE) => (value.address) as string
	)

	// console.log({
	// 	chain,
	// 	tokenAddresses,
	// 	ownerAddress,
	// 	url: RPC_URL[chain?.network as "mainnet" | "sepolia"  ?? "mainnet"] as string
	// })
	//
	useEffect(() => {
		(async() =>  {
			const data = await queryRpcData({
				tokenContractAddresses: tokenAddresses,
				ownerAddress: ownerAddress ?? "",
				nodeUrl: RPC_URL[chain?.network as "mainnet" | "sepolia" ?? "mainnet"] as string
			})
		})()
	}, [tokenAddresses, ownerAddress])


	return {
		ownerAddress,
		network: chain.network ?? "mainnet",
		currentCurrencies,
	}
}
