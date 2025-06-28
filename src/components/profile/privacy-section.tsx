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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Share, Download, Trash2, AlertTriangle } from "lucide-react";

export default function PrivacySection() {
  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    activitySharing: false,
    dataCollection: true,
  });

  return (
    <div className="space-y-6">
      {/* Profile Visibility */}
      <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Eye className="h-5 w-5 mr-2" />
            Profile Visibility
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Control who can see your profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Public Profile
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Make your profile visible to other users
              </p>
            </div>
            <Switch
              checked={privacy.profileVisibility}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, profileVisibility: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Activity Sharing */}
      <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Share className="h-5 w-5 mr-2" />
            Activity Sharing
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Control what activity information is shared
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Share Transaction Activity
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Allow others to see your transaction history
              </p>
            </div>
            <Switch
              checked={privacy.activitySharing}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, activitySharing: checked }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Analytics Data Collection
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Help improve the app by sharing usage data
              </p>
            </div>
            <Switch
              checked={privacy.dataCollection}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, dataCollection: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Export */}
      <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Download className="h-5 w-5 mr-2" />
            Data Portability
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Export your data for backup or transfer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Download a copy of all your data including profile information,
            transaction history, and settings.
          </p>
          <Button
            variant="outline"
            className="w-full sm:w-auto bg-transparent border-gray-300 dark:border-gray-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Export All Data
          </Button>
        </CardContent>
      </Card>

      {/* Account Deletion */}
      <Card className="bg-gray-50 dark:bg-gray-900 border-red-200 dark:border-red-800/50">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400 flex items-center text-lg lg:text-xl">
            <Trash2 className="h-5 w-5 mr-2" />
            Account Deletion
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Permanently delete your account and all associated data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
              <div>
                <p className="text-red-800 dark:text-red-300 font-medium">
                  Warning: This action cannot be undone
                </p>
                <p className="text-red-700 dark:text-red-400 text-sm mt-1">
                  Deleting your account will permanently remove all your data,
                  including transaction history, profile information, and wallet
                  connections.
                </p>
              </div>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-red-600 dark:text-red-400">
                  Confirm Account Deletion
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-400">
                  This action cannot be undone. Please type "DELETE" to confirm.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Type DELETE to confirm"
                  className="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-gray-900 dark:text-white"
                />
                <div className="flex space-x-2">
                  <Button variant="destructive" className="flex-1">
                    Delete My Account
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-gray-300 dark:border-gray-700"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
