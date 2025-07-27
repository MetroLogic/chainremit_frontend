"use client";

import type React from "react";
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
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Loader2,
  Send,
  Wallet,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { PhoneInput } from "@/components/auth/phone-input";
import { useWalletContext } from "../../../components/blockchain/walletProvider";

import { ConnectButton } from "../../../components/blockchain/connect-button";
import WalletDisconnectModal from "../../../components/blockchain/Wallet-disconnect-modal";
// Utility to shorten wallet address
const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
};

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    countryCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const passwordRequirements = [
    { label: "At least 8 characters", test: (pwd: string) => pwd.length >= 8 },
    {
      label: "Contains uppercase letter",
      test: (pwd: string) => /[A-Z]/.test(pwd),
    },
    {
      label: "Contains lowercase letter",
      test: (pwd: string) => /[a-z]/.test(pwd),
    },
    { label: "Contains number", test: (pwd: string) => /\d/.test(pwd) },
    {
      label: "Contains special character",
      test: (pwd: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
  ];

  const getPasswordStrength = () => {
    const passedRequirements = passwordRequirements.filter((req) =>
      req.test(formData.password)
    ).length;
    return (passedRequirements / passwordRequirements.length) * 100;
  };

  const getPasswordStrengthLabel = () => {
    const strength = getPasswordStrength();
    if (strength < 40) return "Weak";
    if (strength < 80) return "Medium";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength();
    if (strength < 40) return "bg-red-500";
    if (strength < 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (getPasswordStrength() < 80) {
      newErrors.password = "Password does not meet security requirements";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast(
        <div>
          <div className="font-bold">Account Created Successfully</div>
          <div>
            Welcome to StarkRemit! Please check your email to verify your
            account.
          </div>
        </div>
      );

      // Redirect to verification page or dashboard
      router.push("/auth/verify-email");
    } catch (error) {
      toast(
        <div>
          <div className="font-bold text-red-600">Sign Up Failed</div>
          <div>
            An error occurred while creating your account. Please try again.
          </div>
        </div>
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Successfully connected to your StarkNet wallet");

      router.push("/dashboard");
    } catch (error) {
      toast("Failed to connect wallet. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate social sign up
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast(`Successfully signed up with ${provider}`);

      router.push("/dashboard");
    } catch (error) {
      toast(`Failed to sign up with ${provider}. Please try again.`);
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
              Create your account
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Join the future of decentralized finance
            </p>
          </div>
        </div>

        {/* Sign Up Card */}
        <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 shadow-lg border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your StarkRemit account to get started
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
                  Or sign up with email
                </span>
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`py-6 pl-10 ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className={errors.lastName ? "border-red-500 p-6" : "p-6"}
                    disabled={isLoading}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
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

              {/* Phone Number */}
              <PhoneInput
                value={formData.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                countryCode={formData.countryCode}
                onCountryChange={(code) =>
                  handleInputChange("countryCode", code)
                }
                error={errors.phoneNumber}
                disabled={isLoading}
              />

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
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

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">
                        Password strength:
                      </span>
                      <span
                        className={`font-medium ${
                          getPasswordStrength() < 40
                            ? "text-red-500"
                            : getPasswordStrength() < 80
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        {getPasswordStrengthLabel()}
                      </span>
                    </div>
                    <Progress value={getPasswordStrength()} className="h-2" />
                    <div className="space-y-1">
                      {passwordRequirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-xs"
                        >
                          {req.test(formData.password) ? (
                            <Check className="h-3 w-3 text-green-500" />
                          ) : (
                            <X className="h-3 w-3 text-gray-400" />
                          )}
                          <span
                            className={
                              req.test(formData.password)
                                ? "text-green-600"
                                : "text-gray-500"
                            }
                          >
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={`py-6 px-10 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => {
                      setAgreeToTerms(checked as boolean);
                      setErrors((prev) => ({ ...prev, terms: "" }));
                    }}
                    disabled={isLoading}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-5">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms}</p>
                )}
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
                    Creating account...
                  </>
                ) : (
                  "Create Account"
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

            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="p-6"
                variant="outline"
                onClick={() => handleSocialSignUp("Google")}
                disabled={isLoading}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                className="p-6"
                variant="outline"
                onClick={() => handleSocialSignUp("Apple")}
                disabled={isLoading}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
            >
              Sign in
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
