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
import { Mail, Send, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email Required\nPlease enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid Email\nPlease enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setEmailSent(true);
      toast(
        "Reset Link Sent\nCheck your email for password reset instructions."
      );
    } catch (error) {
      toast.error(
        "Failed to Send Reset Link\nAn error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Card>
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Check your email
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  We've sent password reset instructions to{" "}
                  <strong>{email}</strong>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEmailSent(false);
                    setEmail("");
                  }}
                  className="w-full"
                >
                  Try again
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to login
            </Link>
          </div>

          <div className="flex justify-center">
            <ThemeToggle />
          </div>
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
              Forgot your password?
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              No worries, we'll send you reset instructions
            </p>
          </div>
        </div>

        {/* Reset Password Card */}
        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
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
                    Sending reset link...
                  </>
                ) : (
                  "Send reset link"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Back to Login */}
        <div className="text-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to login
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
