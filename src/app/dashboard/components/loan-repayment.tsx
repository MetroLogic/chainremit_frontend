"use client";
import React, { useState, useEffect } from 'react';
import { DollarSign, Clock } from 'lucide-react';

const LoanRepaymentCard: React.FC = () => {
  const totalLoan = 500.00;
  const paidAmount = 350.00;
  const remainingAmount = 150.00;
  const interestRate = 8.5;
  const nextPaymentDate = "December 15, 2024";
  
  const progressPercentage = (paidAmount / totalLoan) * 100;
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedPaidAmount, setAnimatedPaidAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 100);

    const duration = 1500; 
    const steps = 60; 
    const stepDuration = duration / steps;
    const increment = paidAmount / steps;
    let currentStep = 0;

    const numberTimer = setInterval(() => {
      currentStep++;
      const currentAmount = (increment * currentStep);
      
      if (currentStep >= steps) {
        setAnimatedPaidAmount(paidAmount);
        clearInterval(numberTimer);
      } else {
        setAnimatedPaidAmount(currentAmount);
      }
    }, stepDuration);

    return () => {
      clearTimeout(timer);
      clearInterval(numberTimer);
    };
  }, [progressPercentage, paidAmount]);

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Loan Repayment Progress</h3>
        <p className="text-sm text-muted-foreground">Track your active loan payments</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-3 sm:gap-0">
        <div className="flex-1">
          <h4 className="text-base font-semibold text-card-foreground mb-1">Personal Loan #1</h4>
          <div className="text-sm text-muted-foreground">
            ${totalLoan.toFixed(2)} total • {interestRate}% APR
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-lg font-bold text-card-foreground">
            ${animatedPaidAmount.toFixed(2)} paid
          </div>
          <div className="text-sm text-muted-foreground">${remainingAmount.toFixed(2)} remaining</div>
        </div>
      </div>
      <div className="mb-6">
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-[1500ms] ease-out"
            style={{ 
              width: `${animatedProgress}%`,
              transform: 'translateZ(0)',
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>0%</span>
          <span className="font-medium text-card-foreground">
            {animatedProgress.toFixed(1)}% paid
          </span>
          <span>100%</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-2 flex-1">
          <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground">Next payment due: {nextPaymentDate}</span>
        </div>
        
        <button className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
          <DollarSign className="w-4 h-4" />
          <span>Make Payment</span>
        </button>
      </div>
    </div>
  );
};

export default LoanRepaymentCard;