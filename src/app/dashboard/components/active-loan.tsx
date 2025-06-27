"use client";

import React from 'react';
import { CreditCard } from 'lucide-react';

const ActiveLoansCard: React.FC = () => {
  const totalLoan = 500.00;
  const nextPayment = "Dec 15";

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Active Loans</h3>
        <CreditCard className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Loan Amount */}
      <div className="mb-4">
        <div className="text-3xl font-bold text-card-foreground mb-2">${totalLoan.toFixed(2)}</div>
        <div className="text-sm text-muted-foreground">Next payment: {nextPayment}</div>
      </div>
    </div>
  );
};

export default ActiveLoansCard;