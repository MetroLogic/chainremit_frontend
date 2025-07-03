import React from "react";
import {
    ArrowDownIcon,
  SendIcon,
} from "lucide-react";

interface RecentRecipient {
  name: string;
  id: string;
  amount: string;
}

export const Send: React.FC<{ recentRecipients: RecentRecipient[] }> = ({ recentRecipients }) => {
  return (
    <div className="flex flex-col items-center">
    <div className="space-y-6 w-[600px] max-w-[600px]">
      <div>
        <h1 className="text-2xl font-semibold">Send Money</h1>
        <h3 className="text-md font-light opacity-65">Transfer funds instantly across the globe</h3>
      </div>
      <div className="rounded-lg border border-gray-800 dark:border-gray-300 p-6 space-y-4">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-xl font-medium">Send Funds</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Enter recipient details and amount to transfer</h2>
        </div>
        <div>
          <label className="block text-sm font-medium">Recipient Address or StarkNet ID</label>
          <input
            className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
            placeholder="0x... or username.stark"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1 w-[50%]">
            <label className="block text-sm font-medium">Amount</label>
            <input
              className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
              placeholder="0.00"
              type="number"
            />
          </div>
          <div className="w-[50%]">
            <label className="block text-sm font-medium">Currency</label>
            <div className="relative mt-1">
              <select
                defaultValue="USDC"
                className="appearance-none w-full h-[43px] rounded border  border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent pr-8"
              >
              <option value="USDC">USDC</option>
              <option value="ETH">ETH</option>
              <option value="STRK">STRK</option>
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <ArrowDownIcon size={16} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Message (Optional)</label>
          <textarea
            className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
            placeholder="Add a note for the recipient..."
            rows={3}
          />
        </div>

        <button className="w-full bg-gray-300 text-gray-800 dark:text-gray-200 dark:bg-gray-700 font-semibold py-2 rounded hover:bg-gray-800 flex items-center justify-center gap-2">
          <SendIcon size={18} /> Send Funds
        </button>
      </div>

      <div className="rounded-lg border border-gray-800 dark:border-gray-300 p-6">
        <h2 className="text-lg font-semibold">Recent Recipients</h2>
        <p className="text-sm font-light mb-4 opacity-65">Quick send to your frequent contacts</p>
        <div className="space-y-3">
          {recentRecipients.map((recipient, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-md border border-gray-800 dark:border-gray-300 p-3 bg-transparent"
            >
              <div className="bg-blue-800/10 p-2 rounded-md">
                <SendIcon className="text-blue-600/50" size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium">{recipient.name}</div>
                <div className="text-sm">{recipient.id}</div>
              </div>
              <div className="flex flex-col justify-end items-end">
                  <div className="text-sm">Last sent</div>
                  <div className="text-sm">{recipient.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
