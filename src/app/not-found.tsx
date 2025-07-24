"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  ArrowLeft,
  Search,
  Send,
  Zap,
  Shield,
  Globe,
  HelpCircle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    setMounted(true);

    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ["404", "4⊘4", "4□4", "▓▓▓", "404"];
      const randomChar =
        glitchChars[Math.floor(Math.random() * glitchChars.length)];
      setGlitchText(randomChar);

      setTimeout(() => setGlitchText("404"), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Secure" },
    { icon: Globe, text: "Global" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl space-y-8">
          {/* Header with enhanced branding */}
          <div className="text-center space-y-4">
            <div
              className={`flex items-center justify-center space-x-3 mb-8 transition-all duration-1000 ${
                mounted ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ChainRemit
              </span>
            </div>
          </div>

          {/* Main 404 Card with glassmorphism */}
          <Card
            className={`border-0 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <CardContent className="p-12 text-center space-y-10">
              {/* Enhanced 404 Illustration */}
              <div className="relative">
                <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 select-none tracking-wider relative">
                  {glitchText}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse" />
                </div>

                {/* Floating search icon with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-bounce">
                      <Search className="w-14 h-14 text-blue-300" />
                    </div>
                    <div className="absolute inset-0 w-28 h-28 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              {/* Error Message with enhanced typography */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Oops! Page Lost in the
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    Blockchain
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  Don't worry! Even the best explorers get lost sometimes. This
                  page seems to have wandered into a different block. Let's
                  navigate you back to safety.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 px-8 py-3"
                >
                  <Home className="mr-2 w-5 h-5" />
                  <Link href="/"> Return Home</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300/50 text-blue-200 hover:bg-blue-500/10 hover:border-blue-300 backdrop-blur-sm bg-white/5 px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  <Link href="/"> Go Back</Link>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="text-blue-300 hover:bg-blue-500/10 px-8 py-3 transition-all duration-300"
                >
                  <RefreshCw className="mr-2 w-5 h-5" />
                  Refresh
                </Button>
              </div>

              {/* Quick Links Grid */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-blue-200 mb-6 text-lg">
                  Popular destinations in ChainRemit:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Send Money", path: "/dashboard/send" },
                    { name: "Receive Funds", path: "/dashboard/receive" },
                    { name: "Microloans", path: "/dashboard/loans" },
                    { name: "Group Savings", path: "/dashboard/groups" },
                    { name: "Credit Score", path: "/dashboard/credit" },
                    { name: "Analytics", path: "/dashboard/analytics" },
                  ].map((link, index) => (
                    <div
                      key={link.name}
                      className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:scale-105 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link href={link.path} className="text-blue-200 group-hover:text-white transition-colors duration-300 font-medium">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.text}
                className={`border-0 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {feature.text}
                  </h3>
                  <p className="text-sm text-blue-200">
                    ChainRemit provides {feature.text.toLowerCase()} financial
                    services
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Need Assistance?
                </h3>
              </div>
              <p className="text-blue-200 mb-6 max-w-md mx-auto">
                Our support team is available 24/7 to help you navigate any
                issues or questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-blue-400/50 text-blue-200 hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm bg-white/5 transition-all duration-300"
                >
                  Contact Support
                </Button>
                <Button
                  variant="ghost"
                  className="text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
