"use client";

import StellarProvider from "./StellarProviders";
import { WalletProvider } from "./wallet-connect-context";


export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StellarProvider>
      <WalletProvider>

          {children}

      </WalletProvider>
    </StellarProvider>
  );
} 