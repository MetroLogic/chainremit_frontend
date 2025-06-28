"use client";
import SecuritySection from "@/components/profile/security-section";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-4 lg:p-6 transition-colors duration-200">
      <div className="mx-auto">
        <div className="mb-6 lg:mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                Security Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Manage your account security and authentication
              </p>
            </div>
          </div>
        </div>

        <SecuritySection />
      </div>
    </div>
  );
}
