"use client";

import type React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState, useEffect } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { toast } from "../../../hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, Loader2, Send, Wallet } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

import { useWalletContext } from "../../../components/blockchain/walletProvider";

import { ConnectButton } from "../../../components/blockchain/connect-button";
import WalletDisconnectModal from "../../../components/blockchain/Wallet-disconnect-modal";

// Utility to shorten wallet address
const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate successful login
      toast.success("Login Successful\nWelcome back to StarkRemit!");

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      toast.error("Login Failed\nInvalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Wallet Connected\n Successfully connected to your StarkNet wallet"
      );

      router.push("/dashboard");
    } catch (error) {
      toast.error(
        "Connection Failed\nFailed to connect wallet. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate social login
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        `Login Successful \n Successfully logged in with ${provider}`
      );

      router.push("/dashboard");
    } catch (error) {
      toast.error(
        `Login Failed \nFailed to login with ${provider}. Please try again.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);

  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();

  // Close connect modal once wallet is connected
  useEffect(() => {
    if (account) {
      setIsConnectModalOpen(false);
    }
  }, [account]);

  const handleLaunchAppClick = () => {
    if (account) {
      setIsDisconnectModalOpen(true); // Already connected → show disconnect modal
    } else {
      setIsConnectModalOpen(true); // Not connected → show connect modal
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/95 dark:bg-slate-900/95 flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Sign in to your account to continue
            </p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 shadow-lg border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Wallet Connect */}

            <button
              onClick={handleLaunchAppClick}
              className="w-full bg-gradient-to-r  from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full py-2 px-3 text-white cursor-pointer"
            >
              {account ? shortenAddress(account) : "Connect StarkNet Wallet"}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    className={`py-6 pl-10 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => ({ ...prev, password: "" }));
                    }}
                    className={`py-6 px-10 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Forgot password?
                </Link>
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
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="py-6"
                variant="outline"
                onClick={() => handleSocialLogin("Google")}
                disabled={isLoading}
              >
                <FcGoogle />
                Google
              </Button>
              <Button
                className="py-6"
                variant="outline"
                onClick={() => handleSocialLogin("Apple")}
                disabled={isLoading}
              >
                <FaApple />
                Apple
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
        {/* Connect modal */}
        <ConnectButton
          isOpen={isConnectModalOpen}
          isClosed
          onSelect={handleWalletConnect}
          setIsModalOpen={setIsConnectModalOpen}
        />

        {/* Disconnect modal */}
        <WalletDisconnectModal
          isOpen={isDisconnectModalOpen}
          onClose={() => setIsDisconnectModalOpen(false)}
          onDisconnect={handleDisconnect}
        />

        {/* Theme Toggle */}
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
