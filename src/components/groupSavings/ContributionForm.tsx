"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { DollarSign, CreditCard, Wallet, AlertCircle, CheckCircle, Calendar } from "lucide-react"

interface ContributionFormProps {
  groupId?: string
  contributionAmount?: number
  dueDate?: string
  groupName?: string
}

const ContributionForm: React.FC<ContributionFormProps> = ({
  groupId,
  contributionAmount = 75,
  dueDate = "Jan 1, 2025",
  groupName = "Tech Workers Collective",
}) => {
  const [paymentMethod, setPaymentMethod] = useState("wallet")
  const [customAmount, setCustomAmount] = useState(contributionAmount.toString())
  const [autoPayEnabled, setAutoPayEnabled] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
      setTimeout(() => setPaymentSuccess(false), 3000)
    }, 2000)
  }

  const walletBalance = 2847.32 // This would come from wallet connection
  const hasInsufficientFunds = Number.parseFloat(customAmount) > walletBalance

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-primary" />
            <span>Make Contribution</span>
          </CardTitle>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Group: {groupName}</span>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>Due: {dueDate}</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contribution Amount */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-card-foreground">Contribution Amount</label>
              <div className="space-y-3">
                <RadioGroup
                  value={customAmount === contributionAmount.toString() ? "standard" : "custom"}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="standard"
                      id="standard"
                      onClick={() => setCustomAmount(contributionAmount.toString())}
                    />
                    <label htmlFor="standard" className="text-sm font-medium cursor-pointer">
                      Standard Amount: ${contributionAmount}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <label htmlFor="custom" className="text-sm font-medium cursor-pointer">
                      Custom Amount
                    </label>
                  </div>
                </RadioGroup>

                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-10 bg-background border-input"
                    min="0"
                    step="0.01"
                  />
                </div>

                {hasInsufficientFunds && (
                  <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Insufficient wallet balance (${walletBalance.toFixed(2)} available)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-card-foreground">Payment Method</label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wallet">
                    <div className="flex items-center space-x-2">
                      <Wallet className="w-4 h-4" />
                      <span>Connected Wallet (${walletBalance.toFixed(2)})</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="card">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span>Credit/Debit Card</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Auto-pay Setting */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <div className="font-medium text-card-foreground">Enable Auto-pay</div>
                <div className="text-sm text-muted-foreground">Automatically pay future contributions when due</div>
              </div>
              <Switch checked={autoPayEnabled} onCheckedChange={setAutoPayEnabled} />
            </div>

            {/* Transaction Summary */}
            <div className="bg-accent/50 p-4 rounded-lg space-y-2">
              <div className="font-medium text-card-foreground">Transaction Summary</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contribution Amount:</span>
                  <span className="font-medium">${Number.parseFloat(customAmount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network Fee:</span>
                  <span className="font-medium">$0.05</span>
                </div>
                <div className="border-t border-border pt-1 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>${(Number.parseFloat(customAmount) + 0.05).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isProcessing || hasInsufficientFunds || paymentSuccess}>
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing Payment...</span>
                </div>
              ) : paymentSuccess ? (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Payment Successful!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Pay ${(Number.parseFloat(customAmount) + 0.05).toFixed(2)}</span>
                </div>
              )}
            </Button>

            {paymentSuccess && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-green-800 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Payment Successful!</div>
                    <div className="text-sm">Your contribution has been recorded on-chain.</div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Recent Contributions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Contributions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Dec 15, 2024", amount: 75, status: "completed" },
              { date: "Nov 15, 2024", amount: 75, status: "completed" },
              { date: "Oct 15, 2024", amount: 75, status: "completed" },
            ].map((contribution, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <div>
                    <div className="font-medium">${contribution.amount}</div>
                    <div className="text-sm text-muted-foreground">{contribution.date}</div>
                  </div>
                </div>
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                >
                  Completed
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContributionForm
