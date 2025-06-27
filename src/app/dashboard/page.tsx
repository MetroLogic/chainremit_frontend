"use client";

import React from 'react';
import WalletBalanceCard from './components/wallet-balance';
import CreditScoreWidget from './components/credit-score';
import ActiveLoansCard from './components/active-loan';
import TransactionsAndRequests from './components/recent-transaction';
import LoanRepaymentCard from './components/loan-repayment';

const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <WalletBalanceCard />
          </div>
          
          <div>
            <CreditScoreWidget />
          </div>
          
          <div>
            <ActiveLoansCard />
          </div>
        </div>

        <div>
          <TransactionsAndRequests />
        </div>
        <div>
          <LoanRepaymentCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;