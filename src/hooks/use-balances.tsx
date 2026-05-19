import React, { useEffect, useState } from 'react'

type CURRENCY_TYPE = {
      symbol: string;
      name: string;
      address: string;
}

export type CURRENCIES_AVAILABLE = "USDC" | "XLM" | "ETH"

export type CURRENCIES_TYPE = Record<CURRENCIES_AVAILABLE, CURRENCY_TYPE>

const CURRENCIES: Record<"sepolia" | "mainnet", CURRENCIES_TYPE> = {
  "sepolia": {
    "USDC": {
      symbol: "USDC",
      name: "USD Coin",
      address: "0x0028729b12ce1140cbc1e7cbc7245455d3c15fa0c7f5d2e9fc8e0441567f6b50"
    },
    "XLM": {
      symbol: "XLM",
      name: "Stellar Lumens",
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
    "XLM": {
      symbol: "XLM",
      name: "Stellar Lumens",
      address: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d"
    },
    "ETH": {
      symbol: "ETH",
      name: "Ether",
      address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
    },
  },
} 

export type TokenBalance = {
  tokenAddress: string;
  balance?: bigint;
  decimals?: number;
};

type IUseBalances = {
	ownerAddress?: string,
}

export const useBalances = ({ ownerAddress }: IUseBalances) => {
	const currentCurrencies = CURRENCIES["mainnet"]

  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([
    {
      tokenAddress: CURRENCIES.mainnet.USDC.address,
      balance: BigInt("1500000000"), // 1,500 USDC
      decimals: 6
    },
    {
      tokenAddress: CURRENCIES.mainnet.XLM.address,
      balance: BigInt("35000000000000000000000"), // 35,000 XLM
      decimals: 18
    },
    {
      tokenAddress: CURRENCIES.mainnet.ETH.address,
      balance: BigInt("1200000000000000000"), // 1.2 ETH
      decimals: 18
    }
  ])

	return {
    ownerAddress,
    tokenBalances,
		network: "mainnet",
		currentCurrencies,
	}
}
