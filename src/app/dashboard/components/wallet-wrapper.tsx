"use client"

import { CURRENCIES_TYPE, TokenBalance, useBalances } from '@/hooks/use-balances';
import { useAccount, useStarkName } from '@starknet-react/core'
import React, { ReactElement } from 'react'


export type WalletInjectedProps = {
  address?: string;
  isConnected?: boolean;
  starknetId?: string;
  isStarknetIdLoading?: boolean;
  currentCurrencies?: CURRENCIES_TYPE,
  tokenBalances?: TokenBalance[]
};

type IWalletWrapper = {
  children: (wallet: WalletInjectedProps) => React.ReactNode;
}

const WalletWrapper:React.FC<IWalletWrapper> = ({ children }) => {

  const { address, isConnected } = useAccount()
  let { data, isLoading } = useStarkName({ address })

  const { currentCurrencies, tokenBalances } = useBalances({ ownerAddress: address })

  data = "me.stark"

  return <>
    {children({
      address,
      isConnected,
      starknetId: data,
      isStarknetIdLoading: isLoading,
      currentCurrencies,
      tokenBalances
    })}
  </>
}

export default WalletWrapper 
