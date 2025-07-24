import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useWalletContext } from "../blockchain/walletProvider";
import { ConnectButton } from "../blockchain/connect-button";
import WalletDisconnectModal from "../blockchain/Wallet-disconnect-modal";
import { useState, useEffect } from "react";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
};

export function HeroSection() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);

  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();

  // Close connect modal once wallet is connected
  useEffect(() => {
    if (account) {
      setIsConnectModalOpen(false);
    }
  }, [account]);

  const handleWalletSelect = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connectWallet(connector);
    }
  };

  const handleLaunchAppClick = () => {
    if (account) {
      setIsDisconnectModalOpen(true); // Already connected → show disconnect modal
    } else {
      setIsConnectModalOpen(true); // Not connected → show connect modal
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };
  return (
    <section className="px-4 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-sm text-gray-400">Powered by StarkNet</div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-6xl">
                Empowering Global Communities with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Decentralized Finance
                </span>
              </h1>

              <p className="text-lg text-gray-300 lg:text-xl">
                Send, save, and borrow across borders on StarkNet. Join the
                future of financial inclusion.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleLaunchAppClick}
                className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                {account ? shortenAddress(account) : "Launch App"}
              </button>
              <HiArrowRight className="h-4 w-4" />

              <button className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-600 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Globe Icon */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-12 lg:p-16">
              <FiGlobe className="h-32 w-32 text-blue-500 lg:h-40 lg:w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Connect modal */}
      <ConnectButton
        isOpen={isConnectModalOpen}
        onSelect={handleWalletSelect}
        setIsModalOpen={setIsConnectModalOpen}
      />

      {/* Disconnect modal */}
      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
    </section>
  );
}
