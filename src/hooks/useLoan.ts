"use client";

import { useState, useCallback } from "react";

export interface LoanOffer {
  id: string;
  title: string;
  description: string;
  apr: number;
  term: number;
  maxAmount: number;
  minScore: number;
  collateralRequired: boolean;
  lenderType: string;
}

export interface LoanApplication {
  id: string;
  lenderTitle: string;
  amount: number;
  apr: number;
  term: number;
  purpose: string;
  collateralOffered: boolean;
  status: "pending" | "approved" | "active" | "completed" | "defaulted";
  appliedDate: string;
  startDate?: string;
  nextPaymentDue?: string;
  paidAmount: number;
  totalRepayment: number;
  progress: number;
  paymentSchedule: number;
}

interface LoanState {
  selectedOffer: LoanOffer | null;
  activeLoans: LoanApplication[];
  completedLoans: LoanApplication[];
  pendingApplications: LoanApplication[];
  availableOffers: LoanOffer[];
}

function useLoan() {
  const [loanState, setLoanState] = useState<LoanState>({
    selectedOffer: null,
    availableOffers: [
      {
        id: "1",
        title: "DeFi Lender Pool",
        description: "Trusted community lender",
        apr: 8.5,
        term: 30,
        maxAmount: 500,
        minScore: 650,
        collateralRequired: false,
        lenderType: "defi",
      },
      {
        id: "2",
        title: "Community Fund",
        description: "Local community lending circle",
        apr: 12.0,
        term: 60,
        maxAmount: 1000,
        minScore: 600,
        collateralRequired: false,
        lenderType: "community",
      },
      {
        id: "3",
        title: "Peer Lending Network",
        description: "Individual peer-to-peer lending",
        apr: 15.5,
        term: 90,
        maxAmount: 2000,
        minScore: 700,
        collateralRequired: true,
        lenderType: "peer",
      },
      {
        id: "4",
        title: "Micro Finance Coop",
        description: "Cooperative microfinance institution",
        apr: 9.8,
        term: 45,
        maxAmount: 750,
        minScore: 550,
        collateralRequired: false,
        lenderType: "cooperative",
      },
      {
        id: "5",
        title: "Digital Bank Express",
        description: "Fast approval digital banking",
        apr: 14.2,
        term: 30,
        maxAmount: 1500,
        minScore: 720,
        collateralRequired: false,
        lenderType: "digital-bank",
      },
      {
        id: "6",
        title: "Traditional Credit Union",
        description: "Established credit union services",
        apr: 7.5,
        term: 120,
        maxAmount: 3000,
        minScore: 680,
        collateralRequired: true,
        lenderType: "credit-union",
      },
    ],
    activeLoans: [
      {
        id: "1",
        lenderTitle: "DeFi Lender Pool",
        amount: 500,
        apr: 8.5,
        term: 30,
        purpose: "Business expansion",
        collateralOffered: false,
        status: "active",
        appliedDate: "2024-11-01",
        startDate: "2024-11-01",
        nextPaymentDue: "Dec 15, 2024",
        paidAmount: 350,
        totalRepayment: 515, // 500 + interest
        progress: 68, // (350/515) * 100
        paymentSchedule: 175,
      },
      {
        id: "3",
        lenderTitle: "Peer Lending Network",
        amount: 750,
        apr: 15.5,
        term: 60,
        purpose: "Home renovation",
        collateralOffered: true,
        status: "pending",
        appliedDate: "2024-12-01",
        startDate: "2024-12-20",
        paidAmount: 0,
        totalRepayment: 820,
        progress: 0,
        paymentSchedule: 410,
      },
    ],
    completedLoans: [
      {
        id: "2",
        lenderTitle: "Community Fund",
        amount: 300,
        apr: 10.0,
        term: 45,
        purpose: "Emergency expense",
        collateralOffered: false,
        status: "completed",
        appliedDate: "2024-10-15",
        startDate: "2024-10-15",
        paidAmount: 330,
        totalRepayment: 330,
        progress: 100,
        paymentSchedule: 110,
      },
    ],
    pendingApplications: [],
  });

  const calculateLoanMetrics = useCallback(
    (amount: number, apr: number, term: number) => {
      const interest = (amount * apr * term) / (100 * 365);
      const totalRepayment = Math.round(amount + interest);
      const paymentSchedule = Math.round(
        totalRepayment / Math.max(1, Math.floor(term / 15))
      );

      return {
        totalRepayment,
        paymentSchedule,
      };
    },
    []
  );

  const calculateProgress = useCallback(
    (paidAmount: number, totalRepayment: number) => {
      return Math.min(Math.round((paidAmount / totalRepayment) * 100), 100);
    },
    []
  );

  const determineLoanStatus = useCallback(
    (
      paidAmount: number,
      totalRepayment: number,
      startDate: string,
      term: number
    ): LoanApplication["status"] => {
      const progress = calculateProgress(paidAmount, totalRepayment);
      const today = new Date();
      const loanStartDate = new Date(startDate);
      const loanEndDate = new Date(
        loanStartDate.getTime() + term * 24 * 60 * 60 * 1000
      );

      if (progress >= 100) return "completed";
      if (today > loanEndDate && progress < 100) return "defaulted";
      if (today < loanStartDate) return "pending";
      if (paidAmount > 0) return "active";
      return "approved";
    },
    [calculateProgress]
  );

  const selectLoanOffer = useCallback((offer: LoanOffer) => {
    setLoanState((prev) => ({
      ...prev,
      selectedOffer: offer,
    }));
  }, []);

  const clearSelectedOffer = useCallback(() => {
    setLoanState((prev) => ({
      ...prev,
      selectedOffer: null,
    }));
  }, []);

  const submitLoanApplication = useCallback(
    (
      application: Omit<
        LoanApplication,
        | "id"
        | "status"
        | "appliedDate"
        | "totalRepayment"
        | "progress"
        | "paymentSchedule"
        | "paidAmount"
      >
    ) => {
      const { totalRepayment, paymentSchedule } = calculateLoanMetrics(
        application.amount,
        application.apr,
        application.term
      );

      const newApplication: LoanApplication = {
        ...application,
        id: `loan_${Date.now()}`,
        status: "pending",
        appliedDate: new Date().toISOString().split("T")[0],
        startDate: new Date().toISOString().split("T")[0],
        nextPaymentDue: calculateNextPaymentDue(application.term),
        paidAmount: 0,
        totalRepayment,
        progress: 0,
        paymentSchedule,
      };

      setLoanState((prev) => ({
        ...prev,
        activeLoans: [...prev.activeLoans, newApplication],
        selectedOffer: null,
      }));

      setTimeout(() => {
        setLoanState((prev) => ({
          ...prev,
          activeLoans: prev.activeLoans.map((loan) =>
            loan.id === newApplication.id
              ? { ...loan, status: "active" as const }
              : loan
          ),
        }));
      }, 3000);

      return newApplication;
    },
    [calculateLoanMetrics]
  );

  const makePayment = useCallback(
    (loanId: string, paymentAmount?: number) => {
      setLoanState((prev) => ({
        ...prev,
        activeLoans: prev.activeLoans.map((loan) => {
          if (loan.id === loanId) {
            const actualPayment = paymentAmount || loan.paymentSchedule;
            const newPaidAmount = loan.paidAmount + actualPayment;
            const newProgress = calculateProgress(
              newPaidAmount,
              loan.totalRepayment
            );
            const newStatus = determineLoanStatus(
              newPaidAmount,
              loan.totalRepayment,
              loan.startDate || loan.appliedDate,
              loan.term
            );

            const updatedLoan = {
              ...loan,
              paidAmount: Math.min(newPaidAmount, loan.totalRepayment),
              progress: newProgress,
              status: newStatus,
              nextPaymentDue:
                newStatus === "completed"
                  ? undefined
                  : calculateNextPaymentDue(loan.term),
            };

            return updatedLoan;
          }
          return loan;
        }),
      }));

      setLoanState((prev) => {
        const activeLoans = prev.activeLoans.filter(
          (loan) => loan.status !== "completed"
        );
        const completedLoans = [
          ...prev.completedLoans,
          ...prev.activeLoans.filter((loan) => loan.status === "completed"),
        ];

        return {
          ...prev,
          activeLoans,
          completedLoans,
        };
      });
    },
    [calculateProgress, determineLoanStatus]
  );

  const getActiveLoans = useCallback(() => {
    return loanState.activeLoans.filter(
      (loan) =>
        loan.status === "active" ||
        loan.status === "pending" ||
        loan.status === "approved"
    );
  }, [loanState.activeLoans]);

  const getCompletedLoans = useCallback(() => {
    return loanState.completedLoans;
  }, [loanState.completedLoans]);

  return {
    ...loanState,
    activeLoans: getActiveLoans(),
    completedLoans: getCompletedLoans(),
    selectLoanOffer,
    clearSelectedOffer,
    submitLoanApplication,
    makePayment,
    calculateLoanMetrics,
    calculateProgress,
    determineLoanStatus,
  };
}

function calculateNextPaymentDue(termInDays: number): string {
  const nextPayment = new Date();
  nextPayment.setDate(nextPayment.getDate() + Math.min(termInDays, 15));
  return nextPayment.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default useLoan;
