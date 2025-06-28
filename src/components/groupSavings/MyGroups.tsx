"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, DollarSign, Users } from "lucide-react"

interface MyGroupData {
  id: string
  name: string
  memberStatus: string
  memberCount: number
  myContribution: number
  contributionFrequency: string
  nextDue: string
  myTurn: string
  totalPool: number
  progressPercentage: number
}

const MyGroups: React.FC = () => {
  const myGroups: MyGroupData[] = [
    {
      id: "1",
      name: "Tech Workers Collective",
      memberStatus: "Member",
      memberCount: 15,
      myContribution: 75,
      contributionFrequency: "Monthly",
      nextDue: "Jan 1, 2025",
      myTurn: "March 2025",
      totalPool: 900,
      progressPercentage: 80,
    },
  ]

  return (
    <div className="space-y-6">
      {myGroups.map((group) => (
        <Card key={group.id} className="border border-border bg-card">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-xl font-semibold text-card-foreground mb-2">{group.name}</CardTitle>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {group.memberStatus}
                  </span>
                  <span className="text-sm text-muted-foreground">{group.memberCount} members</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">My Contribution</div>
                <div className="font-semibold text-card-foreground text-lg">${group.myContribution}</div>
                <div className="text-xs text-muted-foreground">{group.contributionFrequency}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Next Due</div>
                <div className="font-semibold text-card-foreground">{group.nextDue}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">My Turn</div>
                <div className="font-semibold text-card-foreground">{group.myTurn}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Total Pool</div>
                <div className="font-semibold text-card-foreground text-lg">${group.totalPool}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Progress to next payout</span>
                <span className="text-sm font-medium text-card-foreground">{group.progressPercentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${group.progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex  sm:flex-row gap-3 md:w-fit">
              <Button className="flex items-center space-x-2 flex-1">
                <DollarSign className="w-4 h-4" />
                <span>Make Contribution</span>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {myGroups.length === 0 && (
        <Card className="border border-border bg-card">
          <CardContent className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">No Groups Yet</h3>
            <p className="text-muted-foreground mb-4">
              You haven't joined any savings groups yet. Browse available groups or create your own.
            </p>
            <Button>Browse Available Groups</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default MyGroups
