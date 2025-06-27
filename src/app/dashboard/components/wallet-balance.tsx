"use client";

import React from 'react';
import { Wallet as WalletIcon } from 'lucide-react';

const Wallet: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Total Balance</h3>
        <WalletIcon className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="mb-4">
        <div className="text-3xl font-bold text-card-foreground mb-4">$2,847.32</div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-muted-foreground">ETH: 1.24</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-muted-foreground">STRK: 450.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;