"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  jsonRpcProvider,
  voyager,
} from "@starknet-react/core";
import { Toaster } from "react-hot-toast";
import { StarknetWalletProvider } from "./context/StarknetWalletContext";

export function Providers({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StarknetConfig
        chains={[sepolia]}
        provider={jsonRpcProvider({
          rpc: (chain) => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
        })}
        connectors={connectors}
        explorer={voyager}
        autoConnect
      >
        <StarknetWalletProvider>
          {children}
          <Toaster position="bottom-right" />
        </StarknetWalletProvider>
      </StarknetConfig>
    </ThemeProvider>
  );
}
