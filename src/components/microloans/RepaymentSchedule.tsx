"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, CheckCircle } from "lucide-react";
import { LoanApplication } from "@/hooks/useLoan";
import { LoanCard } from "./LoanCard";

interface RepaymentScheduleProps {
  loans: LoanApplication[];
  onMakePayment: (loanId: string, paymentAmount?: number) => void;
}

export default function RepaymentSchedule({
  loans,
  onMakePayment,
}: RepaymentScheduleProps) {
  const activeLoans = loans.filter(
    (loan) =>
      loan.status === "active" ||
      loan.status === "pending" ||
      loan.status === "approved"
  );
  const completedLoans = loans.filter((loan) => loan.status === "completed");

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="active"
    >
      <AccordionItem
        value="active"
        className="border-2 data-[state=open]:p-4 data-[state=closed]:py-2 data-[state=closed]:px-2 rounded-2xl mb-2 border-t-[#9c9c9e] border-b-[#9c9c9e] border-l-[#d5d5d7] border-r-[#d5d5d7]"
      >
        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#3065da]" />
            Active Loans ({activeLoans.length})
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          {activeLoans.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No active loans</p>
              <p className="text-sm">Apply for a loan to get started</p>
            </div>
          ) : (
            activeLoans.map((loan) => (
              <LoanCard
                key={loan.id}
                loan={loan}
                onMakePayment={onMakePayment}
              />
            ))
          )}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="completed"
        className="border-2 data-[state=open]:p-4 data-[state=closed]:py-2 data-[state=closed]:px-2 rounded-2xl mb-2 border-t-[#9c9c9e] border-b-[#9c9c9e] border-l-[#d5d5d7] border-r-[#d5d5d7]"
      >
        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            Completed Loans ({completedLoans.length})
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          {completedLoans.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No completed loans yet</p>
            </div>
          ) : (
            completedLoans.map((loan) => <LoanCard key={loan.id} loan={loan} />)
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
