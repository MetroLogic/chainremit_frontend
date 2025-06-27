"use client";

import React from 'react';
import { DollarSign, Clock } from 'lucide-react';

const LoanRepaymentCard: React.FC = () => {
  const totalLoan = 500.00;
  const paidAmount = 350.00;
  const remainingAmount = 150.00;
  const interestRate = 8.5;
  const nextPaymentDate = "December 15, 2024";
  const progressPercentage = (paidAmount / totalLoan) * 100;

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Loan Repayment Progress</h3>
        <p className="text-sm text-muted-foreground">Track your active loan payments</p>
      </div>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h4 className="text-base font-semibold text-card-foreground mb-1">Personal Loan #1</h4>
          <div className="text-sm text-muted-foreground">
            ${totalLoan.toFixed(2)} total • {interestRate}% APR
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-card-foreground">${paidAmount.toFixed(2)} paid</div>
          <div className="text-sm text-muted-foreground">${remainingAmount.toFixed(2)} remaining</div>
        </div>
      </div>
      <div className="mb-6">
        <div className="w-full bg-white rounded-full h-3">
          <div 
            className="bg-white h-3 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Next payment due: {nextPaymentDate}</span>
        </div>
        
        <button className="flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          <DollarSign className="w-4 h-4" />
          <span>Make Payment</span>
        </button>
      </div>
    </div>
  );
};

export default LoanRepaymentCard;