"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Smartphone, MessageSquare, Clock } from "lucide-react";

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    email: {
      transactions: true,
      security: true,
      marketing: false,
      frequency: "immediate",
    },
    push: {
      transactions: true,
      security: true,
      priceAlerts: false,
    },
    sms: {
      security: true,
      transactions: false,
    },
  });

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Mail className="h-5 w-5 mr-2" />
            Email Notifications
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Configure email notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Transaction Notifications
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Get notified about your transactions
              </p>
            </div>
            <Switch
              checked={notifications.email.transactions}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, transactions: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Security Alerts
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Important security notifications
              </p>
            </div>
            <Switch
              checked={notifications.email.security}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, security: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Marketing Updates
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Product updates and promotions
              </p>
            </div>
            <Switch
              checked={notifications.email.marketing}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, marketing: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Email Frequency
              </Label>
            </div>
            <Select
              value={notifications.email.frequency}
              onValueChange={(value) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, frequency: value },
                }))
              }
            >
              <SelectTrigger className="w-full sm:w-32 bg-white dark:bg-black border-gray-300 dark:border-gray-700 cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <Smartphone className="h-5 w-5 mr-2" />
            Push Notifications
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Mobile and browser push notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Transaction Updates
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Real-time transaction notifications
              </p>
            </div>
            <Switch
              checked={notifications.push.transactions}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, transactions: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Security Alerts
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Login attempts and security events
              </p>
            </div>
            <Switch
              checked={notifications.push.security}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, security: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Price Alerts
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Cryptocurrency price movements
              </p>
            </div>
            <Switch
              checked={notifications.push.priceAlerts}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, priceAlerts: checked },
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* SMS Alerts */}
      <Card className="bg-gray-50 bg-card  border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white flex items-center text-lg lg:text-xl">
            <MessageSquare className="h-5 w-5 mr-2" />
            SMS Alerts
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Text message notifications for critical events
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Security Events
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Critical security notifications via SMS
              </p>
            </div>
            <Switch
              checked={notifications.sms.security}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  sms: { ...prev.sms, security: checked },
                }))
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex-1">
              <Label className="text-gray-900 dark:text-white text-sm lg:text-base">
                Large Transactions
              </Label>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                SMS alerts for high-value transactions
              </p>
            </div>
            <Switch
              checked={notifications.sms.transactions}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  sms: { ...prev.sms, transactions: checked },
                }))
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
