"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Plus } from "lucide-react"

const GroupCreation: React.FC = () => {
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
    contributionAmount: "",
    frequency: "weekly",
    maxMembers: "",
    targetAmount: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating group:", formData)
    // Handle group creation logic here
  }

  return (
    <Card className="border border-border bg-card">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-semibold text-card-foreground">Create New Savings Group</CardTitle>
        <p className="text-muted-foreground">Set up a new savings circle for your community</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Group Name</label>
            <Input
              placeholder="Enter group name"
              value={formData.groupName}
              onChange={(e) => handleInputChange("groupName", e.target.value)}
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Description</label>
            <Textarea
              placeholder="Describe the purpose of this savings group..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="bg-background border-input min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Contribution Amount ($)</label>
              <Input
                type="number"
                placeholder="50"
                value={formData.contributionAmount}
                onChange={(e) => handleInputChange("contributionAmount", e.target.value)}
                className="bg-background border-input"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Frequency</label>
              <Select value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                <SelectTrigger className="bg-background border-input w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Maximum Members</label>
              <Input
                type="number"
                placeholder="10"
                value={formData.maxMembers}
                onChange={(e) => handleInputChange("maxMembers", e.target.value)}
                className="bg-background border-input"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Target Amount ($)</label>
              <Input
                type="number"
                placeholder="500"
                value={formData.targetAmount}
                onChange={(e) => handleInputChange("targetAmount", e.target.value)}
                className="bg-background border-input"
              />
            </div>
          </div>

          <div className="bg-blue-900/30 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-card-foreground mb-2">How it works</h4>
                <p className="text-sm text-muted-foreground">
                  Members contribute regularly to a shared pool. Each cycle, one member receives the full amount. The
                  order is determined fairly and transparently on-chain.
                </p>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full flex items-center justify-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create Savings Group</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default GroupCreation
