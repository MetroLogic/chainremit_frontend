"use client";

import React from "react";
import { Bell, Menu, User, PanelLeftClose, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAccount } from "@starknet-react/core";
import { useStarknetWallet } from "@/components/context/StarknetWalletContext";

interface HeaderProps {
  onMenuClick: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  isCollapsed,
  onToggleCollapse,
}) => {


  const {truncatedAddress, disconnectWallet, address} =  useStarknetWallet()
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden text-foreground hover:text-muted-foreground"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <button
          className="hidden lg:block text-foreground hover:text-muted-foreground"
          onClick={onToggleCollapse}
        >
          <PanelLeftClose className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-medium text-green-700 dark:text-green-400">
            Connected to StarkNet Mainnet
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
       {address &&  <div className="text-sm text-muted-foreground"> {truncatedAddress} </div>}
        <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <ThemeToggle />

        <button className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <User className="w-4 h-4 text-muted-foreground" />
        </button>



        <button onClick={disconnectWallet} className="flex items-center justify-center w-8 h-8 bg-muted rounded-full hover:bg-accent transition-colors">
          <LogOut className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
