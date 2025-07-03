import React from "react";
import { DownloadIcon, Share2Icon, CheckCircleIcon, ClockIcon, XCircleIcon, QrCodeIcon } from "lucide-react";
import { CopyButton } from "./copy-button";

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

export const Receive: React.FC<{
  starknetId: string;
  walletAddress: string;
  recentPayments: IncomingPayment[];
}> = ({ starknetId, walletAddress, recentPayments }) => {
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
        <div className="flex flex-col items-center gap-3">
          <div className="bg-gray-300 dark:bg-gray-800 rounded-lg p-6 m-6">
            <QrCodeIcon size={128} className="text-gray-400" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p>{starknetId}</p>
            <p className="text-sm text-gray-400">{walletAddress}</p>
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-300 dark:border-gray-800 px-4 py-2 rounded inline-flex items-center hover:bg-gray-300 dark:hover:bg-gray-800">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download QR
            </button>
            <button className="border border-gray-300 dark:border-gray-800 px-4 py-2 rounded inline-flex items-center hover:bg-gray-300 dark:hover:bg-gray-800">
              <Share2Icon className="mr-2 h-4 w-4" /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6  border-gray-800 dark:border-gray-300">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-lg font-medium">Wallet Details</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Share these details to receive payments</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">StarkNet ID</label>
            <div className="flex items-center gap-2 mt-1">
                <input readOnly value={starknetId} className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-1 bg-transparent" />
              <CopyButton text={starknetId} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Wallet Address</label>
            <div className="flex items-center gap-2 mt-1">
                <input readOnly value={walletAddress} className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-1 bg-transparent" />
              <CopyButton text={walletAddress} />
            </div>
          </div>
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
