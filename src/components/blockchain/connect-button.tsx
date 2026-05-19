"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

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
  onSelect,
}: ConnectButtonProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      const mockAddress = "GD2ABC12345678901234567890123456789012345678901234567890";
      localStorage.setItem("walletAddress", mockAddress);
      onSelect("freighter");
      setIsModalOpen(false);
      router.push("/dashboard");
    }
  }, [isOpen, onSelect, setIsModalOpen, router]);

  return <div className="relative"></div>;
}
