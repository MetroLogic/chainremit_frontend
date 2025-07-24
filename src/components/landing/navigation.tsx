



"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX, HiPaperAirplane } from "react-icons/hi";
import { useWalletContext } from "../../components/blockchain/walletProvider";
import { ConnectButton } from "../blockchain/connect-button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WalletDisconnectModal from "../blockchain/Wallet-disconnect-modal";
import { MoreVertical } from "lucide-react";

interface NavigationProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export function Navigation({ setIsModalOpen }: NavigationProps) {
  const pathname = usePathname();
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Added missing state

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { account, connectWallet, disconnectWallet, connectors } = useWalletContext();

  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connectWallet(connector);
    }
  };

  const handleConnectWallet = () => {
    setIsConnectModalOpen(true);
  };

  const handleWalletClick = () => {
    setIsDisconnectModalOpen(true);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // ✅ Close connect modal when connected
  useEffect(() => {
    if (account) {
      setIsConnectModalOpen(false);
    }
  }, [account]);

  return (
    <nav className="relative z-50 px-4 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <HiPaperAirplane className="h-5 w-5 text-white rotate-45" />
            </div>
            <span className="text-xl font-bold text-white">ChainRemit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
            <Link href="/auth/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">Login</button>
            </Link>
            <Link href="/auth/signup">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">Sign Up</button>
            </Link>

            {/* Wallet Button */}
            {!account ? (
              <button
                onClick={handleConnectWallet}
                className="bg-blue-600 hover:bg-blue-900 text-white px-5 py-2 rounded-full font-medium"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={handleWalletClick}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e24] border border-gray-800 cursor-pointer hover:border-gray-600"
                >
                  <div className="h-8 w-8 rounded-full border-2 border-teal-500 overflow-hidden">
                    <Image
                      src="/Avater.svg"
                      alt="Wallet Avatar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white font-medium">
                    {account.slice(0, 6)}…{account.slice(-4)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown();
                    }}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                  >
                    <MoreVertical size={16} />
                  </button>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-600 border border-blue-800">
                    <div className="py-1">
                      <button
                        onClick={handleWalletClick}
                        className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-blue-700"
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
              <Link href="/auth/login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">Login</button>
              </Link>
              <Link href="/auth/signup">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">Sign Up</button>
              </Link>
              <div>
                {!account ? (
                  <button
                    onClick={handleConnectWallet}
                    className="bg-blue-600 hover:bg-blue-900 text-white px-5 py-2 rounded-full font-medium"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button
                    onClick={handleWalletClick}
                    className="bg-blue-600 hover:bg-blue-900 text-white px-5 py-2 rounded-full font-medium"
                  >
                    Disconnect
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <ConnectButton
        isOpen={isConnectModalOpen}
        onSelect={handleWalletSelect}
        setIsModalOpen={setIsConnectModalOpen}
      />
      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </nav>
  );
}

