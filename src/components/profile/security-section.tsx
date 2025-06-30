"use client";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Lock, Shield, Smartphone, History, Monitor, Key } from "lucide-react";

export default function SecuritySection() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loginHistory] = useState([
    {
      device: "Chrome on MacOS",
      location: "San Francisco, CA",
      time: "2 hours ago",
      current: true,
    },
    {
      device: "Mobile App",
      location: "San Francisco, CA",
      time: "1 day ago",
      current: false,
    },
    {
      device: "Firefox on Windows",
      location: "New York, NY",
      time: "3 days ago",
      current: false,
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Password Change */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Lock className="h-5 w-5 mr-2" />
            Password Security
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Update your password and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700 bg-transparent"
              >
                Change Password
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white bg-card  border-gray-200 dark:border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-gray-900 dark:text-white">
                  Change Password
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-400">
                  Enter your current password and choose a new one
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="current-password"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="new-password"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  />
                </div>
                <Button className="w-full">Update Password</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Shield className="h-5 w-5 mr-2" />
            Two-Factor Authentication
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Add extra security to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <Label className="text-gray-900 dark:text-white">
                  Authenticator App
                </Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use an authenticator app for 2FA
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {twoFactorEnabled && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                >
                  Enabled
                </Badge>
              )}
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={setTwoFactorEnabled}
              />
            </div>
          </div>
          {!twoFactorEnabled && (
            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-300 dark:border-gray-700"
            >
              Enable 2FA
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Login History */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <History className="h-5 w-5 mr-2" />
            Login History
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Recent login activity on your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loginHistory.map((login, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-100 dark:bg-black rounded-lg space-y-2 sm:space-y-0"
            >
              <div className="flex items-center space-x-3">
                <Monitor className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                    {login.device}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                    {login.location} • {login.time}
                  </p>
                </div>
              </div>
              {login.current && (
                <Badge
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 w-fit"
                >
                  Current Session
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recovery Phrase */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Key className="h-5 w-5 mr-2" />
            Recovery Phrase Backup
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Secure your wallet with a recovery phrase
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              Your recovery phrase is the master key to your wallet. Store it
              securely offline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              variant="outline"
              className="flex-1 bg-transparent border-gray-300 dark:border-gray-700"
            >
              View Recovery Phrase
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-transparent border-gray-300 dark:border-gray-700"
            >
              Download Backup
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
