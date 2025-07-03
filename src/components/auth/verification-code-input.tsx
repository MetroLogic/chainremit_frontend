"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface VerificationCodeInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
}

export function VerificationCodeInput({
  value,
  onChange,
  disabled,
  error,
}: VerificationCodeInputProps) {
  const [codes, setCodes] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setCodes(value.split("").concat(Array(6 - value.length).fill("")));
  }, [value]);

  const handleChange = (index: number, newValue: string) => {
    if (newValue.length > 1) {
      // Handle paste
      const pastedCode = newValue.slice(0, 6);
      const newCodes = pastedCode
        .split("")
        .concat(Array(6 - pastedCode.length).fill(""));
      setCodes(newCodes);
      onChange(pastedCode);

      // Focus the last filled input or the next empty one
      const nextIndex = Math.min(pastedCode.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (!/^\d*$/.test(newValue)) return; // Only allow digits

    const newCodes = [...codes];
    newCodes[index] = newValue;

    setCodes(newCodes);
    onChange(newCodes.join(""));

    // Auto-focus next input
    if (newValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  return (
    <div className="flex justify-center space-x-2">
      {codes.map((code, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={code}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={() => handleFocus(index)}
          disabled={disabled}
          className={`w-12 h-12 text-center text-lg font-semibold bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 ${
            error ? "border-red-500 dark:border-red-400" : ""
          }`}
        />
      ))}
    </div>
  );
}
