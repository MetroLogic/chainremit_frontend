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
import { toast } from "@/hooks/use-toast";
import { Mail, Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!verificationCode.trim()) {
      toast(
       "Please enter the verification code sent to your email.",
       
      );
      return;
    }

    setIsLoading(true);

    try {
      // Simulate verification
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsVerified(true);
      toast(
          "Your account has been verified. Redirecting to dashboard...",
      );

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      toast(
        "Invalid verification code. Please try again."
      
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);

    try {
      // Simulate resending code
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast(
         "A new verification code has been sent to your email."
      );
    } catch (error) {
      toast(
      "Failed to resend verification code. Please try again."
        
      );
    } finally {
      setIsResending(false);
    }
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Card>
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Email Verified!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Your account has been successfully verified. Redirecting to
                  dashboard...
                </p>
              </div>
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Send className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">StarkRemit</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Verify your email
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              We've sent a verification code to your email address
            </p>
          </div>
        </div>

        {/* Verification Card */}
        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              Enter the 6-digit verification code we sent to your email address
              to complete your account setup.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Email"
                )}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Didn't receive the code?
              </p>
              <Button
                variant="link"
                onClick={handleResendCode}
                disabled={isResending}
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                {isResending ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Resending...
                  </>
                ) : (
                  "Resend verification code"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Login */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Want to use a different email?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
            >
              Back to login
            </Link>
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
