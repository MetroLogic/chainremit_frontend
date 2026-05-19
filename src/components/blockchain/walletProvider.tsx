"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";

export interface Connector {
  id: string;
  name: string;
  available: () => boolean;
}

interface WalletContextProps {
  account: string | null;
  connectors: Connector[];
  connectWallet: (connector: Connector) => void;
  disconnectWallet: () => void;
  connectAsync: () => Promise<void>;
}

const WalletContext = createContext<WalletContextProps>({
  account: null,
  connectors: [],
  connectWallet: () => {},
  disconnectWallet: () => {},
  connectAsync: () => Promise.resolve(),
});

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("walletAddress");
    if (saved) {
      setAccount(saved);
    }
  }, []);

  const connectors: Connector[] = [
    { id: "freighter", name: "Freighter Wallet", available: () => true },
    { id: "lobstr", name: "LOBSTR Wallet", available: () => true },
    { id: "xbull", name: "xBull Wallet", available: () => true },
    { id: "albedo", name: "Albedo", available: () => true },
  ];

  const connectWallet = useCallback((connector: Connector) => {
    const mockAddress = "GD2ABC12345678901234567890123456789012345678901234567890";
    setAccount(mockAddress);
    localStorage.setItem("walletAddress", mockAddress);
  }, []);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    localStorage.removeItem("walletAddress");
  }, []);

  const connectAsync = useCallback(async () => {
    const mockAddress = "GD2ABC12345678901234567890123456789012345678901234567890";
    setAccount(mockAddress);
    localStorage.setItem("walletAddress", mockAddress);
  }, []);

  return (
    <WalletContext.Provider
      value={{
        account,
        connectors,
        connectWallet,
        disconnectWallet,
        connectAsync,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error("useWalletContext must be inside WalletProvider");
  }
  return ctx;
};
