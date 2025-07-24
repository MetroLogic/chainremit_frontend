"use client"

import { CopyIcon } from "lucide-react";
import React from "react"

export const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <button onClick={copyToClipboard}className="border border-gray-300 dark:border-gray-800 rounded flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-800 w-[36px] h-[36px]">
      <CopyIcon size={16} />
    </button>
  );
};
