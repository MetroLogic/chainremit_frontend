"use client"
import React from 'react'

import { downloadImage, truncate } from "@/lib/utils"
import { DownloadIcon, QrCodeIcon, Share2Icon } from 'lucide-react';

import QRCode from "react-qr-code";

type IQrCode = {
  starknetId?: string;
  walletAddress?: string;
}

const QrCode:React.FC<IQrCode> = ({ starknetId, walletAddress }) => {
  const handleDownload = () => {
    const svg = (document as any)?.getElementById('qr-code') as SVGSVGElement;
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    downloadImage('qr-code.svg', url);

    // Optional cleanup
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-gray-300 dark:bg-gray-400 rounded-lg p-6 m-6">
        { 
          walletAddress 
            ? <QRCode title='Wallet Address' value={walletAddress} bgColor='transparent' id='qr-code' /> 
            : <QrCodeIcon size={128} /> 
        }
      </div>
      <div className="flex flex-col items-center gap-1">
        { starknetId && <p>{starknetId}</p> }
        { walletAddress ? <p className="text-sm text-gray-400">{truncate(walletAddress, { truncateLen: 8 })}</p> : <p className="text-sm text-gray-400">Connect wallet to view address</p>}
      </div>
      <div className="flex gap-2">
        <button className="border border-gray-300 dark:border-gray-800 px-4 py-2 rounded inline-flex items-center hover:bg-gray-300 dark:hover:bg-gray-800" onClick={handleDownload}>
          <DownloadIcon className="mr-2 h-4 w-4" /> Download QR
        </button>
        <button className="border border-gray-300 dark:border-gray-800 px-4 py-2 rounded inline-flex items-center hover:bg-gray-300 dark:hover:bg-gray-800">
          <Share2Icon className="mr-2 h-4 w-4" /> Share
        </button>
      </div>
    </div>
  )
}

export default QrCode 
