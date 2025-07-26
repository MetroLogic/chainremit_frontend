
"use client";

import React, { useEffect, useState } from "react";
import {
  Bell,
  Menu,
  User,
  PanelLeftClose,
  LogOut,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import WalletDisconnectModal from "../../../components/blockchain/Wallet-disconnect-modal";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitingForReconnect, setWaitingForReconnect] = useState(false);

  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleDisconnect = () => {
    disconnect();
    setIsModalOpen(false);
    setWaitingForReconnect(true);
  };

  // ✅ When the user reconnects after disconnecting, navigate to dashboard
  useEffect(() => {
    if (waitingForReconnect && address) {
      router.push("/dashboard");
    }
  }, [waitingForReconnect, address, router]);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors"
        >
          {isCollapsed ? (
            <Menu className="w-4 h-4 text-muted-foreground" />
          ) : (
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        <span className="text-lg font-semibold">Dashboard</span>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
        </button>

        <button className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <User className="w-4 h-4 text-muted-foreground" />
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Disconnect confirmation modal */}
      <WalletDisconnectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </header>
  );
};

export default Header;
