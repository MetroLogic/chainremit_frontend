"use client";

import StarknetProvider from "./StarknetProviders";
import { WalletProvider } from "./wallet-connect-context";


export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StarknetProvider>
      <WalletProvider>

          {children}

      </WalletProvider>
    </StarknetProvider>
  );
} 