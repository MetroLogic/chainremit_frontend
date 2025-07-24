"use client";

import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Users, CheckCircle, Clock, UserPlus, CreditCard, X, Check } from 'lucide-react';

const TransactionsAndRequests: React.FC = () => {
  const transactions = [
    {
      id: 1,
      type: 'Send',
      toFrom: '0x789...abc',
      amount: '-$125.50',
      status: 'Complete',
      icon: ArrowUpRight,
      iconColor: 'text-red-500',
    },
    {
      id: 2,
      type: 'Receive',
      toFrom: '0x456...def',
      amount: '+$75.00',
      status: 'Complete',
      icon: ArrowDownLeft,
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      type: 'Group',
      toFrom: 'Savings Circle #3',
      amount: '-$50.00',
      status: 'Pending',
      icon: Users,
      iconColor: 'text-blue-500',
    },
  ];

  const pendingRequests = [
    {
      id: 1,
      type: 'Join Savings Group',
      description: 'Community Builders Circle',
      icon: UserPlus,
      iconBg: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'Loan Application',
      description: '$200 for 30 days',
      icon: CreditCard,
      iconBg: 'bg-green-500'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div className="bg-card rounded-xl border border-border p-4 lg:p-6 flex-1">
        <div className="mb-4 lg:mb-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Your latest financial activity</p>
        </div>
        <div className="hidden md:grid md:grid-cols-4 gap-4 pb-3 border-b border-border text-sm font-medium text-muted-foreground mb-4">
          <div>Type</div>
          <div>To/From</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
        <div className="space-y-3 lg:space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="border-b border-border pb-3 lg:pb-4 last:border-b-0 last:pb-0">
              <div className="hidden md:grid md:grid-cols-4 gap-4 items-center">
                <div className="flex items-center space-x-3">
                  <transaction.icon className={`w-4 h-4 ${transaction.iconColor}`} />
                  <span className="text-card-foreground">{transaction.type}</span>
                </div>
                <div className="text-card-foreground">
                  {transaction.toFrom}
                </div>
                <div className="text-card-foreground">
                  {transaction.amount}
                </div>
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'Complete' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {transaction.status === 'Complete' ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Complete
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </>
                    )}
                  </span>
                </div>
              </div>
              <div className="md:hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <transaction.icon className={`w-4 h-4 ${transaction.iconColor}`} />
                    <span className="text-card-foreground font-medium">{transaction.type}</span>
                  </div>
                  <div className="text-card-foreground font-semibold">
                    {transaction.amount}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">
                    {transaction.toFrom}
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'Complete' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {transaction.status === 'Complete' ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Complete
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-4 lg:p-6 flex-1">
        <div className="mb-4 lg:mb-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Pending Requests</h3>
          <p className="text-sm text-muted-foreground">Actions requiring your attention</p>
        </div>
        <div className="space-y-3 lg:space-y-4">
          {pendingRequests.map((request) => (
            <div key={request.id} className="border border-border rounded-lg p-3 lg:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${request.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <request.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-card-foreground">{request.type}</div>
                    <div className="text-sm text-muted-foreground truncate">{request.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:flex-shrink-0">
                  <button className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg border border-border text-card-foreground hover:bg-accent transition-colors flex-1 sm:flex-initial">
                    <X className="w-4 h-4" />
                    <span className="text-sm">{request.id === 1 ? 'Decline' : 'Reject'}</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors flex-1 sm:flex-initial">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">{request.id === 1 ? 'Accept' : 'Approve'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsAndRequests;