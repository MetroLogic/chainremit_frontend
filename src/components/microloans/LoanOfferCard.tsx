"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TrendingUp, User, Users } from "lucide-react";

interface LoanOfferCardProps {
  title: string;
  description: string;
  apr: string;
  term: string;
  maxAmount: string;
  minScore: string;
  collateralRequired: boolean;
  onApplyNow?: () => void;
}

export default function LoanOfferCard({
  title,
  description,
  apr,
  term,
  maxAmount,
  minScore,
  collateralRequired,
  onApplyNow,
}: LoanOfferCardProps) {
  return (
    <Card className="border-2 border-t-[#9c9c9e] p-3 gap-2 md:gap-4 border-b-[#9c9c9e] border-l-[#d5d5d7] border-r-[#d5d5d7]">
      <CardHeader className="p-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-md">{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <TrendingUp className="h-4 w-4 text-[#27b465]" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-4">
          <div>
            <Label className="text-sm text-muted-foreground">APR</Label>
            <p className="text-xl">{apr}</p>
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Term</Label>
            <p className="text-xl">{term}</p>
          </div>
          <div>
            <Label className="text-sm text-muted-foreground text-nowrap">
              Max Amount
            </Label>
            <p className="text-xl">{maxAmount}</p>
          </div>
          <div>
            <Label className="text-sm text-muted-foreground text-nowrap">
              Min Score
            </Label>
            <p className="text-xl">{minScore}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`px-3 py-1 text-xs font-medium rounded-xl ${
              collateralRequired
                ? "bg-[#272728] text-white border border-[#222224]"
                : "bg-[#DAFCE1] text-[#72A383] border-2 border-[#E6F7F3] "
            }`}
          >
            {collateralRequired ? "Collateral Required" : "No Collateral"}
          </div>
          <Button onClick={onApplyNow}>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
