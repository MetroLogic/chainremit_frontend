import React from "react";
import { DownloadIcon, CheckCircleIcon, ClockIcon, XCircleIcon, QrCodeIcon } from "lucide-react";
import { CopyButton } from "./copy-button";
import QrCode from "./qr-code";
import { WalletInjectedProps } from "./wallet-wrapper";

const getStatusBadge = (status: string) => {
  const normalized = status.toLowerCase();
  let color = "";
  let icon = null;

  switch (normalized) {
    case "completed":
      color = "bg-green-200 text-green-900 border-green-500";
      icon = <CheckCircleIcon size={14} className="mr-1" />;
      break;
    case "pending":
      color = "bg-amber-200 text-amber-900 border-amber-500";
      icon = <ClockIcon size={14} className="mr-1" />;
      break;
    case "failed":
      color = "bg-red-200 text-red-900 border-red-500";
      icon = <XCircleIcon size={14} className="mr-1" />;
      break;
    default:
      color = "bg-gray-700 text-gray-400 border-gray-500";
  }

  return (
    <div
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium ${color}`}
    >
      {icon}
      {status}
    </div>
  );
};

interface IncomingPayment {
  from: string;
  date: string;
  amount: string;
  status: string;
}

export const Receive: React.FC<WalletInjectedProps & {
  recentPayments: IncomingPayment[];
}> = ({ starknetId, address, recentPayments }) => {

  return (
    <div className="flex flex-col items-center">
    <div className="space-y-6 w-[600px] max-w-[600px]">
      <div>
        <h1 className="text-2xl font-semibold">Receive Money</h1>
        <h3 className="text-md font-light opacity-65">Share your wallet details to recieve payments</h3>
      </div>
      <div className="rounded-lg border border-gray-800 dark:border-gray-300 p-6">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-medium mb-1">Your Payment QR Code</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Scan to send money to your wallet</h2>
        </div>
        <QrCode walletAddress={address} starknetId={starknetId} />
      </div>

      <div className="rounded-lg border p-6  border-gray-800 dark:border-gray-300">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-lg font-medium">Wallet Details</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Share these details to receive payments</h2>
        </div>
        <div className="space-y-4">
            { starknetId && <div>
              <label className="block text-sm font-medium">StarkNet ID</label>
              <div className="flex items-center gap-2 mt-1">
                <input readOnly value={starknetId} className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-1 bg-transparent" />
                <CopyButton text={starknetId} />
              </div>
            </div>
            }
            { address 
              ? <div>
                <label className="block text-sm font-medium">Wallet Address</label>
                <div className="flex items-center gap-2 mt-1">
                  <input readOnly value={address} className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-1 bg-transparent" />
                  <CopyButton text={address} />
                </div>
              </div> 
              : <p className="block text-sm font-medium">Connect wallet to view address</p>
            }
        </div>
      </div>

      <div className="rounded-lg border p-6  border-gray-800 dark:border-gray-300">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-lg font-medium">Recent Incoming Payments</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Your latest recieved transactions</h2>
        </div>
        <div className="space-y-3">
          {recentPayments.map((tx, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-md border border-gray-800 dark:border-gray-300 p-3"
              >
                <div className="bg-green-300/20 p-2 rounded-full">
                  <DownloadIcon className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-regular">From {tx.from}</div>
                  <div className="text-sm text-gray-400">{tx.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-500 font-medium">{tx.amount}</div>
                  {getStatusBadge(tx.status)}
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Receive
