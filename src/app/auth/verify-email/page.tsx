"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Loader2, Send, CheckCircle } from "lucide-react";
import { VerificationCodeInput } from "@/components/auth/verification-code-input";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Auto-send initial verification code
  useEffect(() => {
    if (email) {
      sendVerificationCode();
    }
  }, [email]);

  const sendVerificationCode = async () => {
    if (!email) return;

    setIsResending(true);
    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 5000);

      } else {
      }
    } catch (error) {

    } finally {
      setIsResending(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!email || verificationCode.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const response = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      const data = await response.json();

      if (data.success) {

        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCodeChange = (code: string) => {
    setVerificationCode(code);
    setError("");

    // Auto-verify when 6 digits are entered
    if (code.length === 6) {
      setTimeout(() => {
        handleVerifyCode();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative">
      {/* Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center ">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            ChainRemit
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Verify your email
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          We've sent a verification code to your email address
        </p>
      </div>

      <div className="w-full max-w-md space-y-6">
        {/* Main Verification Card */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-gray-900/20">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Check your email
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 px-2">
              Enter the 6-digit verification code we sent to your email address
              to complete your account setup.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Verification Code
              </label>
              <VerificationCodeInput
                value={verificationCode}
                onChange={handleCodeChange}
                disabled={isVerifying}
                error={!!error}
              />
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center">
                  {error}
                </p>
              )}
            </div>

            <Button
              onClick={handleVerifyCode}
              disabled={isVerifying || verificationCode.length !== 6}
              className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 font-medium"
              size="lg"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Didn't receive the code?
              </p>
              <Button
                variant="link"
                onClick={sendVerificationCode}
                disabled={isResending}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 p-0 h-auto font-medium"
              >
                {isResending ? "Sending..." : "Resend verification code"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Want to use a different email?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Back to login
            </Link>
          </p>
        </div>

      </div>

      {/* Success Toast Notification */}
      {showSuccessToast && (
        <div className="fixed top-8 right-8 z-50 animate-in slide-in-from-right duration-300">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/20 w-80">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Verification Code Sent
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    A new verification code has been sent to your email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
