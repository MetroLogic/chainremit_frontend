"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';

const CreditScoreWidget: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Credit Score</h3>
        <TrendingUp className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="mb-4">
        <div className="text-4xl font-bold text-green-500 mb-2">742</div>
        <div className="flex items-center space-x-2">
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-medium">A+</span>
          <span className="text-muted-foreground text-sm">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreWidget;