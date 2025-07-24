"use client" 

import { Send } from "../components/send";
import WalletWrapper from "../components/wallet-wrapper";

const DUMMY_RECIPIENTS = [
  {
    name: "Alice Johnson",
    id: "alice.stark",
    amount: "$125.50",
  },
  {
    name: "Bob Smith",
    id: "bob.stark",
    amount: "$75.00",
  },
  {
    name: "Charlie Miner",
    id: "0x8aE3...D7F4",
    amount: "$300.00",
  },
  {
    name: "Community Wallet",
    id: "0x456...def",
    amount: "$50.00",
  },
];

const page = () => {
   return <WalletWrapper>
      {({ address, isConnected, currentCurrencies, tokenBalances }) => {
        return <Send
          address={address}
        isConnected={isConnected}
        currentCurrencies={currentCurrencies}
        tokenBalances={tokenBalances}
          recentRecipients={DUMMY_RECIPIENTS}
        />
      }}
    </WalletWrapper>
}

export default page;
