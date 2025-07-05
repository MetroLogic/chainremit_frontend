"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign } from "lucide-react";
import type { LoanApplication } from "@/hooks/useLoan";
import { formatCurrency, getStatusConfig } from "@/utils/formatting";

interface LoanCardProps {
  loan: LoanApplication;
  onMakePayment?: (loanId: string) => void;
}

function getStatusBadge(status: string) {
  const config = getStatusConfig(status);

  if (config.type === "custom") {
    return <div className={config.className}>{config.label}</div>;
  }

  return <Badge className={config.className}>{config.label}</Badge>;
}

export function LoanCard({ loan, onMakePayment }: LoanCardProps) {
  const isActive = loan.status === "active";
  const isPending = loan.status === "pending";
  const isApproved = loan.status === "approved";
  const isCompleted = loan.status === "completed";
  const showPaymentButton = isActive && onMakePayment;

  return (
    <Card className="border-r-[#9c9c9e] border-l-[#9c9c9e] border-b-[#9c9c9e] border-t-[#9c9c9e] border mb-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{loan.lenderTitle}</h3>
            <p className="text-muted-foreground">
              {formatCurrency(loan.amount)} • {loan.apr}% APR • {loan.term} days
            </p>
          </div>
          {getStatusBadge(loan.status)}
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Repayment Progress</span>
              <span>
                {formatCurrency(loan.paidAmount)} /{" "}
                {formatCurrency(loan.totalRepayment)}
              </span>
            </div>
            <Progress value={loan.progress} className="h-2" />
          </div>

          <div className="flex justify-between items-center">
            <div>
              {isPending && (
                <>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold">Awaiting Approval</p>
                </>
              )}
              {isApproved && (
                <>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold">Funds Being Disbursed</p>
                </>
              )}
              {isActive && loan.nextPaymentDue && (
                <>
                  <p className="text-sm text-muted-foreground">
                    Next Payment Due
                  </p>
                  <p className="font-semibold">{loan.nextPaymentDue}</p>
                </>
              )}
              {isCompleted && (
                <>
                  <p className="text-sm text-muted-foreground">
                    Loan Completed
                  </p>
                  <p className="font-semibold">
                    {new Date(
                      new Date(loan.startDate || loan.appliedDate).getTime() +
                        loan.term * 24 * 60 * 60 * 1000
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </>
              )}
            </div>
            {showPaymentButton && (
              <Button onClick={() => onMakePayment(loan.id!)}>
                <DollarSign className="h-4 w-4 mr-2" />
                Make Payment
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
