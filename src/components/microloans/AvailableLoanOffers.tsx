"use client";

import { useState, useMemo } from "react";
import LoanOfferCard from "./LoanOfferCard";
import { LoanOffer } from "@/hooks/useLoan";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, Filter, X } from "lucide-react";

interface LoanFilters {
  searchTerm: string;
  maxAmount: number;
  maxAPR: string;
  termLength: string;
  lenderType: string;
  noCollateralOnly: boolean;
}

interface AvailableLoanOffersProps {
  offers: LoanOffer[];
  onApplyNow: (offer: LoanOffer) => void;
}

export default function AvailableLoanOffers({
  offers = [],
  onApplyNow,
}: AvailableLoanOffersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<LoanFilters>({
    searchTerm: "",
    maxAmount: 5000,
    maxAPR: "",
    termLength: "all",
    lenderType: "all",
    noCollateralOnly: false,
  });

  const lenderTypes = Array.from(
    new Set(offers.map((offer: LoanOffer) => offer.lenderType))
  ).sort();

  const filteredOffers = useMemo(() => {
    return offers.filter((offer: LoanOffer) => {
      if (
        filters.searchTerm &&
        !offer.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
        !offer.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) &&
        !offer.lenderType
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase())
      ) {
        return false;
      }

      if (offer.maxAmount > filters.maxAmount) {
        return false;
      }

      if (filters.maxAPR && offer.apr > parseFloat(filters.maxAPR)) {
        return false;
      }

      if (filters.termLength && filters.termLength !== "all") {
        const filterTermDays = parseInt(filters.termLength);
        if (offer.term !== filterTermDays) {
          return false;
        }
      }

      if (
        filters.lenderType &&
        filters.lenderType !== "all" &&
        offer.lenderType !== filters.lenderType
      ) {
        return false;
      }

      if (filters.noCollateralOnly && offer.collateralRequired) {
        return false;
      }

      return true;
    });
  }, [offers, filters]);

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      maxAmount: 5000,
      maxAPR: "",
      termLength: "all",
      lenderType: "all",
      noCollateralOnly: false,
    });
  };

  const hasActiveFilters =
    filters.searchTerm !== "" ||
    filters.maxAmount !== 5000 ||
    filters.maxAPR !== "" ||
    filters.termLength !== "all" ||
    filters.lenderType !== "all" ||
    filters.noCollateralOnly;

  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-4 items-start sm:items-center relative justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search loans, lenders, or types..."
            value={filters.searchTerm}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                searchTerm: e.target.value,
              }))
            }
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Button
            variant={showFilters ? "default" : "outline"}
            onClick={() => setShowFilters(!showFilters)}
            className="whitespace-nowrap self-end"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {
                  [
                    filters.searchTerm !== "",
                    filters.maxAmount !== 5000,
                    filters.maxAPR !== "",
                    filters.termLength !== "all",
                    filters.lenderType !== "all",
                    filters.noCollateralOnly,
                  ].filter(Boolean).length
                }
              </Badge>
            )}
          </Button>

          {showFilters && (
            <div className="absolute top-full right-0 mt-2 w-[300px] lg:w-[500px] xl:w-[900px] bg-background border border-border rounded-lg shadow-lg z-50 p-4">
              <div className="grid-cols-2 grid xl:grid-cols-5 gap-5 w-full">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    Max Amount{" "}
                    <span className="text-xs text-muted-foreground font-normal">
                      ${filters.maxAmount}
                    </span>
                  </Label>
                  <div className="h-8 flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={filters.maxAmount}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          maxAmount: parseInt(e.target.value),
                        }))
                      }
                      className="w-full h-2 bg-foreground/20 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    Max Rate{" "}
                    <span className="text-xs text-muted-foreground font-normal">
                      {filters.maxAPR || "20"}%
                    </span>
                  </Label>
                  <div className="h-8 flex items-center">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="0.5"
                      value={filters.maxAPR || "20"}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          maxAPR: e.target.value,
                        }))
                      }
                      className="w-full h-2 bg-foreground/20 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    Term
                  </Label>
                  <Select
                    value={filters.termLength}
                    onValueChange={(value) =>
                      setFilters((prev) => ({ ...prev, termLength: value }))
                    }
                  >
                    <SelectTrigger className="text-sm h-8">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any term</SelectItem>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="45">45 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="120">120 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    Lender
                  </Label>
                  <Select
                    value={filters.lenderType}
                    onValueChange={(value) =>
                      setFilters((prev) => ({ ...prev, lenderType: value }))
                    }
                  >
                    <SelectTrigger className="text-sm h-8">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any type</SelectItem>
                      {lenderTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    Options
                  </Label>
                  <div className="flex items-center space-x-2 h-8">
                    <Switch
                      id="no-collateral"
                      checked={filters.noCollateralOnly}
                      onCheckedChange={(checked) =>
                        setFilters((prev) => ({
                          ...prev,
                          noCollateralOnly: checked,
                        }))
                      }
                    />
                    <Label
                      htmlFor="no-collateral"
                      className="text-xs text-foreground text-nowrap"
                    >
                      No collateral
                    </Label>
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <div className="flex justify-end pt-4 mt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-xs h-8"
                  >
                    <X className="h-3 w-3 mr-1.5" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {filteredOffers.length} / {offers.length}
        </span>
        {filteredOffers.length === 0 && hasActiveFilters && (
          <Button variant="link" onClick={clearFilters} className="text-sm p-0">
            Clear filters to see more offers
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {filteredOffers.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="text-center">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No loans found
                </h3>
                <p className="text-gray-500 mb-4">
                  {hasActiveFilters
                    ? "Try adjusting your filters to see more options."
                    : "Check back later for new loan opportunities."}
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters}>Clear filters</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          filteredOffers.map((offer, index) => (
            <LoanOfferCard
              key={offer.id || index}
              title={offer.title}
              description={offer.description}
              apr={`${offer.apr}%`}
              term={`${offer.term} days`}
              maxAmount={`$${offer.maxAmount.toLocaleString()}`}
              minScore={offer.minScore.toString()}
              collateralRequired={offer.collateralRequired}
              onApplyNow={() => onApplyNow(offer)}
            />
          ))
        )}
      </div>
    </div>
  );
}
