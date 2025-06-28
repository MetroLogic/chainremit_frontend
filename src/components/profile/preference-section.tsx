"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Globe, Palette, DollarSign, Clock, Bell } from "lucide-react";

export default function PreferencesSection() {
  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "dark",
    currency: "USD",
    timezone: "PST",
    pushNotifications: true,
  });

  return (
    <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <Globe className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Language
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Choose your preferred language
              </p>
            </div>
          </div>
          <Select
            value={preferences.language}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, language: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="zh">Chinese</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <Palette className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Theme
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Toggle between light and dark mode
              </p>
            </div>
          </div>
          <Select
            value={preferences.theme}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, theme: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Currency Display
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Default currency for displaying amounts
              </p>
            </div>
          </div>
          <Select
            value={preferences.currency}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, currency: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="BTC">BTC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Timezone Settings
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Your local timezone for timestamps
              </p>
            </div>
          </div>
          <Select
            value={preferences.timezone}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, timezone: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
              <SelectItem value="PST">PST</SelectItem>
              <SelectItem value="EST">EST</SelectItem>
              <SelectItem value="GMT">GMT</SelectItem>
              <SelectItem value="CET">CET</SelectItem>
              <SelectItem value="JST">JST</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Push Notifications
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Receive notifications for transactions
              </p>
            </div>
          </div>
          <Switch
            checked={preferences.pushNotifications}
            onCheckedChange={(checked) =>
              setPreferences((prev) => ({
                ...prev,
                pushNotifications: checked,
              }))
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
