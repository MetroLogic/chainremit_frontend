"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const SupportHours = () => {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm dark:bg-black border-1 border-white dark:border-white">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <CardTitle>Support Hours</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {hours.map((schedule, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {schedule.day}
            </span>
            <span
              className={`text-sm ${
                schedule.time === "Closed"
                  ? "text-red-600"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {schedule.time}
            </span>
          </div>
        ))}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-xs text-blue-800 dark:text-blue-300">
            Emergency support available 24/7 for critical issues
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportHours;
