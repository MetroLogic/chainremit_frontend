"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AvailableLoanOffers,
  RepaymentSchedule,
  LoanApplication,
} from "@/components/microloans";
import useLoan from "@/hooks/useLoan";

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState("available");

  const {
    selectedOffer,
    availableOffers,
    activeLoans,
    completedLoans,
    selectLoanOffer,
    clearSelectedOffer,
    submitLoanApplication,
    makePayment,
  } = useLoan();

  // Handle Apply Now
  const handleApplyNow = (offer: any) => {
    selectLoanOffer(offer);
    setActiveTab("request");
  };

  // Handle loan application submission
  const handleLoanSubmission = (applicationData: any) => {
    submitLoanApplication(applicationData);
    // Switch to My Loans tab
    setActiveTab("my-loans");
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-inter font-semibold">Microloans</h1>
        <p className="text-muted-foreground">
          Access small loans based on your credit score and community trust
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full py-1 px-0.5 bg-tabs-bg rounded-sm">
          <TabsTrigger value="available">Available Offers</TabsTrigger>
          <TabsTrigger value="my-loans">My Loans</TabsTrigger>
          <TabsTrigger value="request">Request Loan</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4 mt-4">
          <AvailableLoanOffers
            offers={availableOffers}
            onApplyNow={handleApplyNow}
          />
        </TabsContent>

        <TabsContent value="my-loans" className="space-y-4 mt-6">
          <RepaymentSchedule
            loans={[...activeLoans, ...completedLoans]}
            onMakePayment={(loanId: string, amount?: number) =>
              makePayment(loanId, amount)
            }
          />
        </TabsContent>

        <TabsContent value="request" className="mt-6">
          <LoanApplication
            selectedOffer={selectedOffer}
            onSubmit={handleLoanSubmission}
            onClearOffer={clearSelectedOffer}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
