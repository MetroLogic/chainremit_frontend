"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

interface GroupData {
  id: string
  name: string
  description: string
  memberCount: number
  maxMembers: number
  contributionAmount: number
  contributionFrequency: string
  targetAmount: number
  raisedAmount: number
  nextPayoutDate: string
  spotsLeft: number
}

const AvailableGroups: React.FC = () => {
  const availableGroups: GroupData[] = [
    {
      id: "1",
      name: "Community Builders Circle",
      description: "A group focused on community development projects",
      memberCount: 12,
      maxMembers: 15,
      contributionAmount: 50,
      contributionFrequency: "Monthly",
      targetAmount: 750,
      raisedAmount: 600,
      nextPayoutDate: "Jan 15, 2025",
      spotsLeft: 3,
    },
    {
      id: "2",
      name: "Small Business Fund",
      description: "Supporting local entrepreneurs and small businesses",
      memberCount: 8,
      maxMembers: 10,
      contributionAmount: 100,
      contributionFrequency: "Bi-weekly",
      targetAmount: 1000,
      raisedAmount: 800,
      nextPayoutDate: "Dec 30, 2024",
      spotsLeft: 2,
    },
    {
      id: "3",
      name: "Education Savings Pool",
      description: "Saving for educational expenses and courses",
      memberCount: 20,
      maxMembers: 25,
      contributionAmount: 25,
      contributionFrequency: "Weekly",
      targetAmount: 625,
      raisedAmount: 500,
      nextPayoutDate: "Dec 22, 2024",
      spotsLeft: 5,
    },
  ]

  const progressPercentage = (raised: number, target: number) => {
    return Math.round((raised / target) * 100)
  }

  return (
    <div className="space-y-6">
      {availableGroups.map((group) => (
        <Card key={group.id} className="border border-border bg-card">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-xl font-semibold text-card-foreground mb-2">{group.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{group.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-card-foreground">
                  {group.memberCount}/{group.maxMembers} members
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Contribution</div>
                <div className="font-semibold text-card-foreground">${group.contributionAmount}</div>
                <div className="text-xs text-muted-foreground">{group.contributionFrequency}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Target</div>
                <div className="font-semibold text-card-foreground">${group.targetAmount}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Raised</div>
                <div className="font-semibold text-card-foreground">${group.raisedAmount}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Next Payout</div>
                <div className="font-semibold text-card-foreground">{group.nextPayoutDate}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Progress to target</span>
                <span className="text-sm font-medium text-card-foreground">
                  {progressPercentage(group.raisedAmount, group.targetAmount)}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage(group.raisedAmount, group.targetAmount)}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">{group.spotsLeft} spots left</span>
              </div>
              <Button variant="outline" className="bg-background hover:bg-accent">
                View Group
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default AvailableGroups
