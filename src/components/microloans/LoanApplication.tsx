"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { CreditCard} from "lucide-react";
import { LoanOffer, LoanApplication as LoanApp } from "@/hooks/useLoan";
import useLoan from "@/hooks/useLoan";
import { formatCurrency } from "@/utils/formatting";

interface LoanApplicationProps {
  selectedOffer: LoanOffer | null;
  onSubmit: (
    applicationData: Omit<
      LoanApp,
      | "id"
      | "status"
      | "appliedDate"
      | "totalRepayment"
      | "progress"
      | "paymentSchedule"
      | "paidAmount"
      | "startDate"
      | "nextPaymentDue"
    >
  ) => void;
  onClearOffer: () => void;
}

export default function LoanApplication({
  selectedOffer,
  onSubmit,
}: LoanApplicationProps) {
  const [loanAmount, setLoanAmount] = useState("100");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [offerCollateral, setOfferCollateral] = useState(false);

  const { calculateLoanMetrics } = useLoan();

  useEffect(() => {
    if (selectedOffer) {
      const maxAmount = selectedOffer.maxAmount;
      const defaultAmount = Math.min(maxAmount, 500);
      setLoanAmount(defaultAmount.toString());

      const termInDays = selectedOffer.term;
      setLoanTerm(termInDays.toString());

      setOfferCollateral(selectedOffer.collateralRequired);
    }
  }, [selectedOffer]);

  const getEstimates = () => {
    const amount = parseFloat(loanAmount) || 0;
    const termDays = parseInt(loanTerm) || 30;

    let apr = 12.0;
    if (selectedOffer) {
      apr = selectedOffer.apr;
    }

    if (offerCollateral && selectedOffer && !selectedOffer.collateralRequired) {
      apr = Math.max(apr - 2, 5);
    }

    const calculation = calculateLoanMetrics(amount, apr, termDays);

    return {
      apr: apr.toFixed(1) + "%",
      totalRepayment: formatCurrency(calculation.totalRepayment),
      totalAmount: calculation.totalRepayment,
    };
  };

  const estimates = getEstimates();

  const handleSubmit = () => {
    if (!selectedOffer) return;

    const applicationData: Omit<
      LoanApp,
      | "id"
      | "status"
      | "appliedDate"
      | "totalRepayment"
      | "progress"
      | "paymentSchedule"
      | "paidAmount"
      | "startDate"
      | "nextPaymentDue"
    > = {
      lenderTitle: selectedOffer.title,
      amount: parseFloat(loanAmount),
      apr: selectedOffer.apr,
      term: parseInt(loanTerm),
      purpose: loanPurpose,
      collateralOffered: offerCollateral,
    };

    onSubmit(applicationData);
  };

  return (
    <Card className="border border-t-[#9c9c9e] border-b-[#9c9c9e] border-l-[#d5d5d7] border-r-[#d5d5d7]">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Request a Loan</CardTitle>
            <CardDescription>
              {selectedOffer
                ? `Apply for a loan from ${selectedOffer.title}`
                : "Fill out the form below to request a microloan from our community"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="loan-amount"
              className="text-sm font-medium mb-2 block"
            >
              Loan Amount ($)
            </Label>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              max={
                selectedOffer ? selectedOffer.maxAmount.toString() : undefined
              }
            />
            {selectedOffer && (
              <p className="text-xs text-muted-foreground mt-1">
                Max: ${selectedOffer.maxAmount.toLocaleString()}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="loan-term"
              className="text-sm font-medium mb-2 block"
            >
              Loan Term
            </Label>
            <Select value={loanTerm} onValueChange={setLoanTerm}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label
            htmlFor="loan-purpose"
            className="text-sm font-medium mb-2 block"
          >
            Loan Purpose
          </Label>
          <Textarea
            id="loan-purpose"
            placeholder="Describe what you'll use this loan for..."
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="offer-collateral"
            checked={offerCollateral}
            onCheckedChange={setOfferCollateral}
          />
          <Label htmlFor="offer-collateral" className="text-sm">
            Offer collateral for better rates
            {selectedOffer &&
              !selectedOffer.collateralRequired &&
              offerCollateral && (
                <span className="text-green-600 ml-2">
                  (~2% rate reduction)
                </span>
              )}
          </Label>
        </div>

        <Card className="bg-loan-terms-bg gap-1 py-3 px-4 border-[#202938]">
          <CardHeader className="p-0">
            <CardTitle className="text-lg">Estimated Loan Terms</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm">Estimated APR:</Label>
                <p className="text-lg font-semibold">{estimates.apr}</p>
              </div>
              <div>
                <Label className="text-sm ">Total Repayment:</Label>
                <p className="text-lg font-semibold">
                  {estimates.totalRepayment}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full text-muted bg-muted-foreground border border-muted"
          onClick={handleSubmit}
          disabled={!loanAmount || !loanTerm || !loanPurpose.trim()}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Submit Loan Request
        </Button>
      </CardContent>
    </Card>
  );
}
