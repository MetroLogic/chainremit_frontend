"use client";

import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";
import { calculatePasswordStrength } from "@/lib/validation";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null;

  const strength = calculatePasswordStrength(password);

  const requirements = [
    {
      key: "length",
      label: "At least 8 characters",
      met: strength.requirements.length,
    },
    {
      key: "uppercase",
      label: "One uppercase letter",
      met: strength.requirements.uppercase,
    },
    {
      key: "lowercase",
      label: "One lowercase letter",
      met: strength.requirements.lowercase,
    },
    { key: "number", label: "One number", met: strength.requirements.number },
    {
      key: "special",
      label: "One special character",
      met: strength.requirements.special,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-300">
          Password strength:
        </span>
        <span
          className={`font-medium ${
            strength.score >= 80
              ? "text-green-600 dark:text-green-400"
              : strength.score >= 60
              ? "text-yellow-600 dark:text-yellow-400"
              : strength.score >= 40
              ? "text-orange-600 dark:text-orange-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {strength.label}
        </span>
      </div>
      <Progress
        value={strength.score}
        className="h-2 bg-gray-200 dark:bg-gray-700"
      />
      <div className="grid grid-cols-1 gap-1">
        {requirements.map((req) => (
          <div key={req.key} className="flex items-center space-x-2 text-xs">
            {req.met ? (
              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
            ) : (
              <X className="h-3 w-3 text-gray-400 dark:text-gray-500" />
            )}
            <span
              className={
                req.met
                  ? "text-green-700 dark:text-green-300"
                  : "text-gray-600 dark:text-gray-400"
              }
            >
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
