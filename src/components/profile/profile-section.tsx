"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Edit,
  Copy,
  Check,
  Shield,
  Calendar,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState("");
  const [profile, setProfile] = useState({
    displayName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    timezone: "Pacific Standard Time (PST)",
    walletAddress: "0xabc123...def789",
    starknetId: "johndoe.stark",
    avatar: "/placeholder.svg?height=100&width=100",
  });

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prev) => ({ ...prev, avatar: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Profile Information */}
      <Card className="  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white text-lg lg:text-xl">
            Profile Information
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Your account details and verification status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 lg:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Avatar className="h-16 w-16 lg:h-20 lg:w-20">
                <AvatarImage
                  src={profile.avatar || "/placeholder.svg"}
                  alt="Profile"
                />
                <AvatarFallback className="bg-gray-200 dark:bg-gray-700">
                  <User className="h-6 w-6 lg:h-8 lg:w-8 text-gray-600 dark:text-gray-400" />
                </AvatarFallback>
              </Avatar>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="absolute cursor-pointer -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 h-6 w-6 lg:h-8 lg:w-8 rounded-full p-0"
                  >
                    <Edit className="h-3 w-3 lg:h-4 lg:w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-gray-200 dark:border-gray-800 mx-4">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900 dark:text-white">
                      Update Avatar
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 dark:text-gray-400">
                      Upload a new profile picture
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="cursor-pointer  bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  {profile.displayName}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 w-fit"
                >
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 flex items-center text-sm lg:text-base">
                <Calendar className="h-4 w-4 mr-1" />
                Member since November 2024
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer "
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>

          {isEditing ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="displayName"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Display Name
                </Label>
                <Input
                  id="displayName"
                  value={profile.displayName}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      displayName: e.target.value,
                    }))
                  }
                  className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Location
                </Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 cursor-pointer "
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 border-gray-300 dark:border-gray-700 cursor-pointer "
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-600 dark:text-gray-400 text-sm">
                  Email Address
                </Label>
                <p className="text-gray-900 dark:text-white text-sm lg:text-base">
                  {profile.email}
                </p>
              </div>
              <div>
                <Label className="text-gray-600 dark:text-gray-400 text-sm">
                  Location
                </Label>
                <p className="text-gray-900 dark:text-white text-sm lg:text-base">
                  {profile.location}
                </p>
              </div>
              <div>
                <Label className="text-gray-600 dark:text-gray-400 text-sm">
                  Phone Number
                </Label>
                <p className="text-gray-900 dark:text-white text-sm lg:text-base">
                  {profile.phone}
                </p>
              </div>
              <div>
                <Label className="text-gray-600 dark:text-gray-400 text-sm">
                  Timezone
                </Label>
                <p className="text-gray-900 dark:text-white text-sm lg:text-base">
                  {profile.timezone}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Wallet Information */}
      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white text-lg lg:text-xl">
            Wallet Information
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Your connected wallet and StarkNet details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 lg:p-4 border rounded-lg space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 lg:h-10 lg:w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                  Primary Wallet
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm break-all">
                  {profile.walletAddress}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(profile.walletAddress, "wallet")}
              className="border-gray-300 cursor-pointer  dark:border-gray-700"
            >
              {copied === "wallet" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="ml-2 hidden sm:inline">
                {copied === "wallet" ? "Copied" : "Copy"}
              </span>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 lg:p-4 border  rounded-lg space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 lg:h-10 lg:w-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs lg:text-sm">
                  S
                </span>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                  StarkNet ID
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                  {profile.starknetId}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300"
            >
              Claimed
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Verification Status */}
      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white text-lg lg:text-xl">
            Verification Status
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Your identity verification and compliance status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 lg:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                    KYC Verified
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                    Identity verification completed
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 w-fit"
              >
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-3 lg:p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Check className="h-4 w-4 text-green-500" />
                <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                  Identity Document
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                Government ID verified
              </p>
            </div>
            <div className="p-3 lg:p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Check className="h-4 w-4 text-green-500" />
                <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                  Address Verification
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                Proof of address confirmed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
