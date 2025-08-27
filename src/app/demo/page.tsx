"use client";

import React, { useState, useEffect, useRef } from "react";
import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Send,
  CreditCard,
  Users,
  TrendingUp,
  Wallet,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Home,
  User,
} from "lucide-react";

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [sendAmount, setSendAmount] = useState("125.50");
  const [recipient, setRecipient] = useState("alice.stark");
  const [groupProgress, setGroupProgress] = useState(80);
  const [creditScore, setCreditScore] = useState(742);
  const [activeTab, setActiveTab] = useState("interactive");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const stepIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const demoSteps = [
    {
      title: "Connect Your Wallet",
      description: "Securely connect your StarkNet wallet to get started",
      component: "wallet-connect",
      duration: 3000,
    },
    {
      title: "Send Money Globally",
      description: "Transfer funds instantly with minimal fees",
      component: "send-money",
      duration: 4000,
    },
    {
      title: "Join Savings Groups",
      description: "Participate in community savings circles",
      component: "savings-groups",
      duration: 3500,
    },
    {
      title: "Access Microloans",
      description: "Get loans based on your credit score",
      component: "microloans",
      duration: 3000,
    },
    {
      title: "Build Credit Score",
      description: "Improve your on-chain financial reputation",
      component: "credit-score",
      duration: 2500,
    },
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setDemoProgress(0);
    setWalletConnected(false);

    // Reset demo state
    setSendAmount("125.50");
    setRecipient("alice.stark");
    setGroupProgress(80);
    setCreditScore(742);

    // Progress bar animation
    intervalRef.current = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current as unknown as number);
          setIsPlaying(false);
          return 100;
        }
        return prev + 0.5;
      });
    }, 100);

    // Auto step progression
    let stepIndex = 0;
    const progressThroughSteps = () => {
      if (stepIndex < demoSteps.length && isPlaying) {
        setCurrentStep(stepIndex);

        // Simulate interactions for each step
        setTimeout(() => {
          switch (stepIndex) {
            case 0:
              setWalletConnected(true);
              break;
            case 1:
              // Animate send money process
              setTimeout(() => setSendAmount("0.00"), 1000);
              setTimeout(() => setSendAmount("125.50"), 2000);
              break;
            case 2:
              // Animate group progress
              let progress = 80;
              const progressInterval = setInterval(() => {
                progress += 2;
                setGroupProgress(progress);
                if (progress >= 100) clearInterval(progressInterval);
              }, 100);
              break;
            case 4:
              // Animate credit score
              let score = 742;
              const scoreInterval = setInterval(() => {
                score += 1;
                setCreditScore(score);
                if (score >= 760) clearInterval(scoreInterval);
              }, 50);
              break;
          }
        }, 500);

        stepIndex++;
        if (stepIndex < demoSteps.length) {
          stepIntervalRef.current = setTimeout(
            progressThroughSteps,
            demoSteps[stepIndex - 1].duration
          );
        }
      }
    };

    progressThroughSteps();
  };

  const pauseDemo = () => {
    setIsPlaying(false);
    if (intervalRef.current)
      clearInterval(intervalRef.current as unknown as number);
    if (stepIntervalRef.current)
      clearTimeout(stepIntervalRef.current as unknown as number);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setDemoProgress(0);
    setWalletConnected(false);
    setSendAmount("125.50");
    setRecipient("alice.stark");
    setGroupProgress(80);
    setCreditScore(742);

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (stepIntervalRef.current) clearTimeout(stepIntervalRef.current);
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  const sendMoney = () => {
    setSendAmount("0.00");
    setTimeout(() => {
      setSendAmount("125.50");
    }, 2000);
  };

  const joinGroup = () => {
    let progress = groupProgress;
    const interval = setInterval(() => {
      progress += 2;
      setGroupProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 100);
  };

  interface DemoStep {
    title: string;
    description: string;
    component: string;
    duration: number;
  }

  interface RenderDemoComponentProps {
    component: string;
  }

  const renderDemoComponent = (component: string): JSX.Element | null => {
    switch (component) {
      case "wallet-connect":
        return (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border rounded-lg">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Connect StarkNet Wallet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Securely connect your wallet to access all ChainRemit features
              </p>
              {walletConnected ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Wallet Connected!</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Address: 0x1234...5678
                  </div>
                </div>
              ) : (
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center mx-auto transition-all"
                  onClick={connectWallet}
                >
                  <Wallet className="mr-2 w-4 h-4" />
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        );

      case "send-money":
        return (
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold flex items-center">
                <Send className="mr-2 w-5 h-5" />
                Send Money
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">To</label>
                  <div className="p-2 border rounded bg-gray-50 dark:bg-gray-800">
                    {recipient}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <div
                    className={`p-2 border rounded transition-colors ${
                      sendAmount === "0.00"
                        ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                        : "bg-gray-50 dark:bg-gray-800"
                    }`}
                  >
                    ${sendAmount}
                  </div>
                </div>
              </div>
              {sendAmount === "0.00" && (
                <div className="text-center text-green-600 text-sm flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transfer Complete!</span>
                </div>
              )}
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-all"
                onClick={sendMoney}
              >
                <Send className="mr-2 w-4 h-4" />
                Send Funds
              </button>
            </div>
          </div>
        );

      case "savings-groups":
        return (
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold flex items-center">
                <Users className="mr-2 w-5 h-5" />
                Community Builders Circle
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                12/15 members • $50 monthly
              </p>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to target</span>
                  <span>{groupProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${groupProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  JD
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  AS
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  MB
                </div>
                <span className="text-sm text-gray-600">+9 more</span>
              </div>
              {groupProgress >= 100 && (
                <div className="text-center text-green-600 text-sm flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Target Reached!</span>
                </div>
              )}
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
                onClick={joinGroup}
              >
                {groupProgress >= 100 ? "Group Complete!" : "Join Group"}
              </button>
            </div>
          </div>
        );

      case "microloans":
        return (
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold flex items-center">
                <CreditCard className="mr-2 w-5 h-5" />
                Available Loan Offers
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">DeFi Lender Pool</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    8.5% APR
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Up to $500 • 30 days • No collateral required
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded transition-all hover:scale-105">
                  Apply Now
                </button>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Peer-to-Peer Lending</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    7.2% APR
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Up to $1,000 • 60 days • Community verified
                </div>
                <button className="border border-gray-300 hover:bg-gray-50 px-3 py-1 text-sm rounded transition-all hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );

      case "credit-score":
        return (
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold flex items-center">
                <TrendingUp className="mr-2 w-5 h-5" />
                Your Credit Score
              </h3>
            </div>
            <div className="p-4 text-center space-y-4">
              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-600 transition-all duration-300">
                      {creditScore}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded text-sm transition-all duration-300 ${
                    creditScore > 750
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Trust Level: {creditScore > 750 ? "A+" : "A"}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {creditScore > 750 ? "Excellent Credit" : "Very Good Credit"}
                </p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Score increased by {creditScore - 742} points this month
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (stepIntervalRef.current) clearTimeout(stepIntervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              {/* Light theme image */}
              <Image
                src="/Logo and text-4.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill block dark:hidden"
              />
              {/* Dark theme image */}
              <Image
                src="/Logo and text-3.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill hidden dark:block"
              />
            </Link>
            <span className="text-l font-semibold text-gray-900 dark:text-white">
              Demo
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience ChainRemit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Take an interactive tour of our decentralized finance platform and
            see how easy it is to send money, save with groups, and access
            microloans.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={isPlaying ? pauseDemo : startDemo}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center text-lg transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 w-4 h-4" />
                  Pause Demo
                </>
              ) : (
                <>
                  <Play className="mr-2 w-4 h-4" />
                  Start Interactive Demo
                </>
              )}
            </button>
            <button
              onClick={resetDemo}
              className="border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center text-lg transition-all"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset
            </button>
          </div>

          {demoProgress > 0 && (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Demo Progress</span>
                <span>{Math.round(demoProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${demoProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "interactive"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("interactive")}
              >
                Interactive Demo
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "features"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Feature Overview
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "walkthrough"
                    ? "bg-white dark:bg-gray-700 shadow-sm"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("walkthrough")}
              >
                Step-by-Step
              </button>
            </div>
          </div>

          {activeTab === "interactive" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 border rounded-lg">
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Demo Steps</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click on any step to explore that feature
                    </p>
                  </div>
                  <div className="p-4 space-y-3">
                    {demoSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                          currentStep === index
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setCurrentStep(index)}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                              currentStep === index
                                ? "bg-blue-600 text-white scale-110"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      {demoSteps[currentStep].title}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={currentStep === demoSteps.length - 1}
                        className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div className="transition-all duration-500 ease-in-out">
                    {renderDemoComponent(demoSteps[currentStep].component)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Instant Transfers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Send money globally with minimal fees and instant
                      settlement
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Global reach
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Low fees (under $1)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Instant settlement
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Savings Groups
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Join community savings circles with automated payouts
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Automated contributions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Transparent tracking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Community trust
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                      <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Microloans</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Access small loans based on your credit score
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Credit-based approval
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Competitive rates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Flexible terms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "walkthrough" && (
            <div className="space-y-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      {renderDemoComponent(step.component)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-lg">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 opacity-90">
                Join thousands of users who are already using ChainRemit for
                their financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg transition-all hover:scale-105 flex items-center justify-center">
                  Create Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border border-white text-white hover:bg-white/10 bg-transparent px-6 py-3 rounded-lg text-lg transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
