"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, Settings } from "lucide-react"

interface Member {
  id: string
  name: string
  avatar?: string
  status: "active" | "pending" | "inactive"
  contributionStatus: "paid" | "pending" | "overdue"
  joinDate: string
  totalContributed: number
  role: "admin" | "member"
}

interface MemberListProps {
  groupId?: string
  isAdmin?: boolean
}

const MemberList: React.FC<MemberListProps> = ({ groupId, isAdmin = false }) => {
  const members: Member[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
      contributionStatus: "paid",
      joinDate: "Oct 1, 2024",
      totalContributed: 225,
      role: "admin",
    },
    {
      id: "2",
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
      contributionStatus: "paid",
      joinDate: "Oct 1, 2024",
      totalContributed: 225,
      role: "member",
    },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
      contributionStatus: "pending",
      joinDate: "Oct 5, 2024",
      totalContributed: 150,
      role: "member",
    },
    {
      id: "4",
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
      contributionStatus: "overdue",
      joinDate: "Oct 10, 2024",
      totalContributed: 75,
      role: "member",
    },
    {
      id: "5",
      name: "Alex Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
      contributionStatus: "pending",
      joinDate: "Dec 20, 2024",
      totalContributed: 0,
      role: "member",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            Paid
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
          >
            Pending
          </Badge>
        )
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return null
    }
  }

  const getRoleBadge = (role: string) => {
    if (role === "admin") {
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400"
        >
          Admin
        </Badge>
      )
    }
    return null
  }

  const activeMembers = members.filter((m) => m.status === "active")
  const pendingMembers = members.filter((m) => m.status === "pending")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <CardTitle>Active Members ({activeMembers.length})</CardTitle>
            </div>
            {isAdmin && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite Members
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-card-foreground">{member.name}</span>
                      {getRoleBadge(member.role)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Joined {member.joinDate} • Contributed ${member.totalContributed}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(member.contributionStatus)}
                  {isAdmin && member.role !== "admin" && (
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {pendingMembers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-500" />
              <span>Pending Members ({pendingMembers.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg bg-yellow-50/50 dark:bg-yellow-900/10"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-card-foreground">{member.name}</div>
                      <div className="text-sm text-muted-foreground">Requested to join on {member.joinDate}</div>
                    </div>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Decline
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Member Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Member Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {members.filter((m) => m.contributionStatus === "paid").length}
              </div>
              <div className="text-sm text-muted-foreground">Paid This Cycle</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {members.filter((m) => m.contributionStatus === "pending").length}
              </div>
              <div className="text-sm text-muted-foreground">Pending Payment</div>
            </div>
            <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {members.filter((m) => m.contributionStatus === "overdue").length}
              </div>
              <div className="text-sm text-muted-foreground">Overdue</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ${members.reduce((sum, m) => sum + m.totalContributed, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Contributed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MemberList
