"use client"

import { useBalances } from '@/hooks/use-balances';
import { useAccount, useBalance, useStarkName } from '@starknet-react/core'
import React, { ReactElement } from 'react'


export type WalletInjectedProps = {
  address?: string;
  isConnected?: boolean;
  starknetId?: string;
  isStarknetIdLoading: boolean;
};

type IWalletWrapper = {
  children: (wallet: WalletInjectedProps) => React.ReactNode;
}

const WalletWrapper:React.FC<IWalletWrapper> = ({ children }) => {

  const { address, isConnected } = useAccount()
  let { data, error, isLoading } = useStarkName({ address })

  const balances = useBalances({ ownerAddress: address })
  console.log(balances)

  data = "me.stark"

  return <>
    {children({
      address,
      isConnected,
      starknetId: data,
      isStarknetIdLoading: isLoading,
    })}
  </>
}

export default WalletWrapper 
