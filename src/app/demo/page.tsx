"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  const demoSteps = [
    {
      title: "Connect Your Wallet",
      description: "Securely connect your StarkNet wallet to get started",
      component: "wallet-connect",
    },
    {
      title: "Send Money Globally",
      description: "Transfer funds instantly with minimal fees",
      component: "send-money",
    },
    {
      title: "Join Savings Groups",
      description: "Participate in community savings circles",
      component: "savings-groups",
    },
    {
      title: "Access Microloans",
      description: "Get loans based on your credit score",
      component: "microloans",
    },
    {
      title: "Build Credit Score",
      description: "Improve your on-chain financial reputation",
      component: "credit-score",
    },
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setDemoProgress(0);

    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setDemoProgress(0);
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

  const renderDemoComponent = (component: string) => {
    switch (component) {
      case "wallet-connect":
        return (
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Connect StarkNet Wallet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Securely connect your wallet to access all ChainRemit features
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Wallet className="mr-2 w-4 h-4" />
                Connect Wallet
              </Button>
            </CardContent>
          </Card>
        );

      case "send-money":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 w-5 h-5" />
                Send Money
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">To</label>
                  <div className="p-2 border rounded bg-gray-50 dark:bg-gray-800">
                    alice.stark
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <div className="p-2 border rounded bg-gray-50 dark:bg-gray-800">
                    $125.50
                  </div>
                </div>
              </div>
              <Button className="w-full">
                <Send className="mr-2 w-4 h-4" />
                Send Funds
              </Button>
            </CardContent>
          </Card>
        );

      case "savings-groups":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 w-5 h-5" />
                Community Builders Circle
              </CardTitle>
              <CardDescription>12/15 members • $50 monthly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to target</span>
                  <span>80%</span>
                </div>
                <Progress value={80} />
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">+9 more</span>
              </div>
              <Button className="w-full">Join Group</Button>
            </CardContent>
          </Card>
        );

      case "microloans":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 w-5 h-5" />
                Available Loan Offers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">DeFi Lender Pool</span>
                  <Badge variant="secondary">8.5% APR</Badge>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Up to $500 • 30 days • No collateral required
                </div>
                <Button size="sm">Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        );

      case "credit-score":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 w-5 h-5" />
                Your Credit Score
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-600">742</div>
                  </div>
                </div>
              </div>
              <div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Trust Level: A+
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Excellent Credit
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/Logo and text-3.png"
              alt="ChainRemit Logo"
              width={150}
              height={50}
              className="w-[150px] h-[50px] object-fill"
            />
            <span className="text-l font-semibold text-gray-900 dark:text-white">
              Demo
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Back to Home</Link>
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
            <Button
              onClick={startDemo}
              disabled={isPlaying}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 w-4 h-4" />
                  Demo Running...
                </>
              ) : (
                <>
                  <Play className="mr-2 w-4 h-4" />
                  Start Interactive Demo
                </>
              )}
            </Button>
            <Button onClick={resetDemo} variant="outline" size="lg">
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset
            </Button>
          </div>

          {isPlaying && (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Demo Progress</span>
                <span>{Math.round(demoProgress)}%</span>
              </div>
              <Progress value={demoProgress} className="h-2" />
            </div>
          )}
        </div>

        <Tabs defaultValue="interactive" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="interactive">Interactive Demo</TabsTrigger>
            <TabsTrigger value="features">Feature Overview</TabsTrigger>
            <TabsTrigger value="walkthrough">Step-by-Step</TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Demo Steps</CardTitle>
                  <CardDescription>
                    Click on any step to explore that feature
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        currentStep === index
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            currentStep === index
                              ? "bg-blue-600 text-white"
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
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {demoSteps[currentStep].title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      variant="outline"
                      size="sm"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={currentStep === demoSteps.length - 1}
                      variant="outline"
                      size="sm"
                    >
                      Next
                    </Button>
                  </div>
                </div>
                {renderDemoComponent(demoSteps[currentStep].component)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Instant Transfers</CardTitle>
                  <CardDescription>
                    Send money globally with minimal fees and instant settlement
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Savings Groups</CardTitle>
                  <CardDescription>
                    Join community savings circles with automated payouts
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Microloans</CardTitle>
                  <CardDescription>
                    Access small loans based on your credit score
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="walkthrough" className="space-y-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {demoSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle>{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {renderDemoComponent(step.component)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 opacity-90">
                Join thousands of users who are already using ChainRemit for
                their financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/auth/signup">
                    Create Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  {/* <Link href="/dashboard">View Dashboard</Link> */}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
