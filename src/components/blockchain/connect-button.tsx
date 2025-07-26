


"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  Connector,
} from "@starknet-react/core";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { WebWalletConnector } from "starknetkit/webwallet";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for redirect

type ConnectButtonVariant = "default" | "navbar";

interface ConnectButtonProps {
  variant?: ConnectButtonVariant;
  isOpen: boolean;
  isClosed?: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (walletId: string) => void;
}

export function ConnectButton({
  isOpen,
  setIsModalOpen,
}: ConnectButtonProps) {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter(); // ✅ initialize router

  const customizedConnectors = connectors.map((connector) => {
    if (connector instanceof WebWalletConnector) {
      return new WebWalletConnector({});
    }
    return connector;
  });

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: customizedConnectors as StarknetkitConnector[],
  });

  const handleConnect = async () => {
    try {
      const { connector } = await starknetkitConnectModal();
      if (connector) {
        await connect({ connector: connector as Connector });
      }
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  useEffect(() => {
    if (isOpen && !isConnected) {
      handleConnect();
      setIsModalOpen(false); // close modal once initiated
    }
  }, [isOpen]);

  // ✅ Redirect on connection
  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return <div className="relative" ref={dropdownRef}></div>;
}
