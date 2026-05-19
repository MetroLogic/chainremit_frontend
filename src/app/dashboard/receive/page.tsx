"use client";

import React from "react";
import Receive from "../components/receive";
import WalletWrapper from "../components/wallet-wrapper";

const DUMMY_RECENT = [
  {
    from: "alice*stellar.org",
    date: "July 2, 2025",
    amount: "+$150.00",
    status: "Completed",
  },
  {
    from: "GD91B3...E4A9",
    date: "July 1, 2025",
    amount: "+$300.00",
    status: "Completed",
  },
  {
    from: "bob*stellar.org",
    date: "June 28, 2025",
    amount: "+$200.00",
    status: "Pending",
  },
  {
    from: "me*stellar.org",
    date: "June 25, 2025",
    amount: "+$200.00",
    status: "Failed",
  },
];

const page = () => {
  return (
    <WalletWrapper>
      {({ address, starknetId, isStarknetIdLoading }) => {
        return (
          <Receive
            address={address}
            starknetId={starknetId}
            isStarknetIdLoading={isStarknetIdLoading}
            recentPayments={DUMMY_RECENT}
          />
        );
      }}
    </WalletWrapper>
  );
};

export default page;
