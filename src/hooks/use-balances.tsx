import React, { useEffect, useState } from 'react'
import { queryRpcData } from './rpc-utils'
import { useAccount, useNetwork, useProvider } from '@starknet-react/core'


type CURRENCY_TYPE = {
      symbol: string;
      name: string;
      address: string;
}

export type CURRENCIES_AVAILABLE = "USDC" | "STRK" | "ETH"

export type CURRENCIES_TYPE = Record<CURRENCIES_AVAILABLE, CURRENCY_TYPE>

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
	"mainnet": "https://rpc.starknet.lava.build:443",
	"sepolia": "https://rpc.starknet-testnet.lava.build:443"

}

export type TokenBalance = {
  tokenAddress: string;
  balance?: bigint;
  decimals?: number;
};

export function areTokenArraysEqual(
  arr1: TokenBalance[],
  arr2: TokenBalance[]
): boolean {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];
    const b = arr2[i];

    if (a.tokenAddress !== b.tokenAddress) return false;

    const balanceEqual =
      a.balance === b.balance ||
      (typeof a.balance === 'undefined' && typeof b.balance === 'undefined');

    if (!balanceEqual) return false;

    const decimalsEqual =
      a.decimals === b.decimals ||
      (typeof a.decimals === 'undefined' && typeof b.decimals === 'undefined');

    if (!decimalsEqual) return false;
  }

  return true;
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

  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([])

	useEffect(() => {
		(async() =>  {
			const data = await queryRpcData({
				tokenContractAddresses: tokenAddresses,
				ownerAddress: ownerAddress ?? "",
				nodeUrl: RPC_URL[chain?.network as "mainnet" | "sepolia" ?? "mainnet"] as string
			})
      if(!areTokenArraysEqual(tokenBalances, data)) {
	setTokenBalances(data)
      }
		})()
	}, [tokenAddresses, ownerAddress])


	return {
    ownerAddress,
    tokenBalances,
		network: chain.network ?? "mainnet",
		currentCurrencies,
	}
}
