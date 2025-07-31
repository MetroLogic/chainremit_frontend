"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Send,
  Search,
  HelpCircle,
  Book,
  MessageCircle,
  Video,
  CreditCard,
  Users,
  Shield,
  TrendingUp,
  Download,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Book className="w-5 h-5" />,
      description: "Learn the basics of using StarkRemit",
      articles: 12,
    },
    {
      id: "sending-money",
      title: "Sending Money",
      icon: <Send className="w-5 h-5" />,
      description: "How to send money globally",
      articles: 8,
    },
    {
      id: "receiving-money",
      title: "Receiving Money",
      icon: <Download className="w-5 h-5" />,
      description: "How to receive payments",
      articles: 6,
    },
    {
      id: "savings-groups",
      title: "Savings Groups",
      icon: <Users className="w-5 h-5" />,
      description: "Join and manage savings circles",
      articles: 10,
    },
    {
      id: "microloans",
      title: "Microloans",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Access and manage loans",
      articles: 9,
    },
    {
      id: "credit-score",
      title: "Credit Score",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Understanding your credit rating",
      articles: 7,
    },
    {
      id: "wallet-security",
      title: "Wallet & Security",
      icon: <Shield className="w-5 h-5" />,
      description: "Keep your account secure",
      articles: 11,
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <HelpCircle className="w-5 h-5" />,
      description: "Common issues and solutions",
      articles: 15,
    },
  ];

  const popularArticles = [
    {
      title: "How to connect your StarkNet wallet",
      category: "Getting Started",
      views: "2.3k views",
    },
    {
      title: "Understanding transaction fees",
      category: "Sending Money",
      views: "1.8k views",
    },
    {
      title: "How to join a savings group",
      category: "Savings Groups",
      views: "1.5k views",
    },
    {
      title: "Improving your credit score",
      category: "Credit Score",
      views: "1.2k views",
    },
    {
      title: "What to do if a transaction fails",
      category: "Troubleshooting",
      views: "1.1k views",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with ChainRemit?",
      answer:
        "To get started, you'll need to connect a StarkNet-compatible wallet, complete identity verification (optional for higher limits), and you can immediately start sending money or joining savings groups.",
    },
    {
      question: "What are the fees for sending money?",
      answer:
        "Our fees are transparent and competitive. You'll pay a small network fee (typically under $0.50) plus our service fee of 1-2% depending on the amount and destination. All fees are shown before you confirm any transaction.",
    },
    {
      question: "How long do transactions take?",
      answer:
        "Most transactions are completed within minutes thanks to StarkNet's fast processing. International transfers typically take 2-10 minutes, while domestic transfers are usually instant.",
    },
    {
      question: "Is my money safe with ChainRemit?",
      answer:
        "Yes, your funds are secured by blockchain technology and smart contracts. We use industry-standard security measures, and your private keys remain under your control when using your own wallet.",
    },
    {
      question: "How do savings groups work?",
      answer:
        "Savings groups are community-based circles where members contribute regularly to a shared pool. Each cycle, one member receives the full amount. It's a traditional savings method enhanced with blockchain transparency and automation.",
    },
    {
      question: "What affects my credit score?",
      answer:
        "Your on-chain credit score is based on payment history (35%), loan utilization (30%), group activity participation (20%), and account tenure (15%). Regular payments and active participation improve your score.",
    },
    {
      question: "Can I use ChainRemit without KYC?",
      answer:
        "Yes, you can use basic features without KYC, but with lower limits. KYC verification unlocks higher transaction limits, access to premium features, and better loan terms.",
    },
    {
      question: "What happens if I lose access to my wallet?",
      answer:
        "If you lose access to your wallet, you'll need to recover it using your seed phrase or backup method. We cannot recover wallets for you, which is why it's crucial to securely store your recovery information.",
    },
  ];

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/Logo and text-3.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill"
              />
            </Link>
            <span className="text-l font-semibold text-gray-900 dark:text-white">
              Help
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Find answers to your questions, learn how to use ChainRemit, and get
            the support you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 w-4 h-4" />
                Contact Support
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo">
                <Video className="mr-2 w-4 h-4" />
                Watch Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/help#getting-started">
                <Book className="mr-2 w-4 h-4" />
                Getting Started Guide
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="browse" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="browse">Browse Topics</TabsTrigger>
            <TabsTrigger value="popular">Popular Articles</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-8">
            {/* Help Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {category.articles} articles
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                            <Badge variant="outline">{article.category}</Badge>
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        {/* Still Need Help */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="mb-6 opacity-90">
              Can't find what you're looking for? Our support team is here to
              help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="mailto:support@chainremit.com">Email Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
