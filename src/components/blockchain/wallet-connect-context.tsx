"use client"
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface WalletContextType {
  isConnected: boolean;
  address: string | undefined;
  isConnecting: boolean;
  isWalletDetected: boolean;
  error: Error | null;
  isModalOpen: boolean;
  openConnectModal: () => void;
  closeConnectModal: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("walletAddress");
    if (saved) {
      setAddress(saved);
    }
  }, []);

  const openConnectModal = () => {
    setIsModalOpen(true);
    const mockAddress = "GD2ABC12345678901234567890123456789012345678901234567890";
    setAddress(mockAddress);
    localStorage.setItem("walletAddress", mockAddress);
  };

  const closeConnectModal = () => {
    setIsModalOpen(false);
  };

  const value = {
    isConnected: !!address,
    address,
    isConnecting: false,
    isWalletDetected: true,
    error: null,
    isModalOpen,
    openConnectModal,
    closeConnectModal
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}