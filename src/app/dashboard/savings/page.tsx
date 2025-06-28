"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import GroupCreation from "@/components/groupSavings/GroupCreation"
import AvailableGroups from "@/components/groupSavings/AvailableGroups"
import MyGroups from "@/components/groupSavings/MyGroups"

const SavingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("available")

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Group Savings</h1>
        <p className="text-muted-foreground">Join or create savings circles with automated payouts</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="available" className="data-[state=active]:bg-background">
            Available Groups
          </TabsTrigger>
          <TabsTrigger value="my-groups" className="data-[state=active]:bg-background">
            My Groups
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-background">
            Create Group
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-6">
          <AvailableGroups />
        </TabsContent>

        <TabsContent value="my-groups" className="mt-6">
          <MyGroups />
        </TabsContent>

        <TabsContent value="create" className="mt-6">
          <GroupCreation />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SavingsPage
