"use client"

import { CURRENCIES_TYPE, TokenBalance, useBalances } from '@/hooks/use-balances';
import { useWalletContext } from "../../../components/blockchain/walletProvider";
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

  const { account } = useWalletContext();
  const isConnected = !!account;
  const address = account ?? undefined;
  const isLoading = false;

  const { currentCurrencies, tokenBalances } = useBalances({ ownerAddress: address })

  const data = "me*stellar.org"

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
