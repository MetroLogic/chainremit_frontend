"use client"
import {
    Search,
    MessageCircle,
    Send,
    Download,
    Users,
    CreditCard,
    TrendingUp,
    Shield,
    HelpCircle,
    Moon,
    Video,
    Book,
    ArrowRight,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Card, CardContent } from "@/components/ui/card"
import { HiPaperAirplane } from "react-icons/hi"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Faq from "@/components/help/faq"
import PopularArticles from "@/components/help/popular-articles"
  
  const helpTopics = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using StarkRemit",
      articles: 12,
    },
    {
      icon: Send,
      title: "Sending Money",
      description: "How to send money globally",
      articles: 8,
    },
    {
      icon: Download,
      title: "Receiving Money",
      description: "How to receive payments",
      articles: 6,
    },
    {
      icon: Users,
      title: "Savings Groups",
      description: "Join and manage savings circles",
      articles: 10,
    },
    {
      icon: CreditCard,
      title: "Microloans",
      description: "Access and manage loans",
      articles: 9, 
    },
    {
      icon: TrendingUp,
      title: "Credit Score",
      description: "Understanding your credit rating",
      articles: 7,
    },
    {
      icon: Shield,
      title: "Wallet & Security",
      description: "Keep your account secure",
      articles: 11,
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      articles: 15,
    },
  ]

  const faqData = [
        {
          question: "How do I get started with StarkRemit?",
          answer:
            "Getting started with StarkRemit is simple. Download our app, create an account, verify your identity, and you can start sending money within minutes. We'll guide you through each step of the process.",
        },
        {
          question: "What are the fees for sending money?",
          answer:
            "Our fees are transparent and competitive. Fees vary based on the destination country, amount sent, and payment method. You'll always see the exact fee before confirming your transaction.",
        },
        {
          question: "How long do transactions take?",
          answer:
            "Most transactions are completed within minutes to a few hours. The exact time depends on the destination country, payment method, and local banking hours. We'll provide you with an estimated delivery time for each transaction.",
        },
        {
          question: "Is my money safe with StarkRemit?",
          answer:
            "Yes, your money is protected by bank-level security measures. We use advanced encryption, secure data storage, and are regulated by financial authorities. Your funds are held in segregated accounts for additional protection.",
        },
        {
          question: "How do savings groups work?",
          answer:
            "Savings groups allow you to pool money with friends and family for common goals. Create or join a group, set savings targets, and track progress together. It's a great way to save for events, emergencies, or investments.",
        },
        {
          question: "What affects my credit score?",
          answer:
            "Your payment history, transaction patterns, and account activity can influence your StarkRemit credit score. Regular, on-time transactions and maintaining account security positively impact your score.",
        },
        {
          question: "Can I use StarkRemit without KYC?",
          answer:
            "For small transactions, you can start with basic verification. However, for larger amounts and full access to all features, KYC (Know Your Customer) verification is required to comply with financial regulations.",
        },
        {
          question: "What happens if I lose access to my wallet?",
          answer:
            "If you lose access to your wallet, contact our support team immediately. We have recovery procedures in place to help you regain access to your account and funds safely.",
        }
      ]

    const articlesData = [
    {
        title: "How to connect your StarkNet wallet",
        category: "Getting Started",
        views: "2.3k views",
        href: "/articles/connect-starknet-wallet",
    },
    {
        title: "Understanding transaction fees",
        category: "Sending Money",
        views: "1.8k views",
        href: "/articles/transaction-fees",
    },
    {
        title: "How to join a savings group",
        category: "Savings Groups",
        views: "1.5k views",
        href: "/articles/join-savings-group",
    },
    {
        title: "Improving your credit score",
        category: "Credit Score",
        views: "1.2k views",
        href: "/articles/improve-credit-score",
    },
    {
        title: "What to do if a transaction fails",
        category: "Troubleshooting",
        views: "1.1k views",
        href: "/articles/transaction-fails",
    },
    ]
        
  export default function StarkRemitHelp() {
    return (
      <div className="bg-slate-900 text-white">
        {/* Header */}
        <header className="border-b border-slate-800 px-4 py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <HiPaperAirplane className="h-5 w-5 text-white rotate-45" />
            </div>
            <span className="text-xl font-bold text-white">ChainRemit Help</span>
          </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:text-white">
                Home
              </Button>
              <Button variant="default" className="bg-white cursor-pointer text-black">
                Contact Support
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Moon className="h-5 w-5 rounded-full" />
              </Button>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold">How can we help?</h1>
            <p className="mb-8 text-xl text-slate-300">
              Find answers to your questions, learn how to use StarkRemit, and get
              <br />
              the support you need.
            </p>
  
            {/* Search Bar */}
            <div className="relative mb-8 max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                className="bg-slate-800 max-w-full border-slate-700 pl-12 text-lg placeholder:text-slate-400 focus:border-purple-500"
              />
            </div>
  
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600">
                <Video className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600">
                <Book className="mr-2 h-4 w-4" />
                Getting Started Guide
              </Button>
            </div>
          </div>
        </section>
  
        {/* Help Topics Grid */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-full w-full xl:w-4/5">
            <div className="mb-8 flex items-center justify-between"> 
                <Tabs defaultValue="browse" className="w-full">
                <TabsList className="w-full p-1 rounded-md">
                  <TabsTrigger className="rounded-sm cursor-pointer" value="browse">Browse Topics</TabsTrigger>
                  <TabsTrigger className="rounded-sm cursor-pointer" value="popular">Popular Articles</TabsTrigger>
                  <TabsTrigger className="rounded-sm cursor-pointer" value="faq">FAQ</TabsTrigger>
                </TabsList>
                <TabsContent value="browse" className="py-2 w-full">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {helpTopics.map((topic, index) => (
                        <Card
                        key={index}
                        className="group cursor-pointer rounded-md border-slate-700 bg-slate-800 transition-all hover:border-slate-600 hover:bg-slate-750"
                        >
                        <CardContent className="flex flex-col h-full justify-between">
                            <div className="">
                                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-l from-purple-600 to-blue-600`}>
                                <topic.icon className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-white">{topic.title}</h3>
                                <p className="mb-4 text-sm text-slate-400">{topic.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm rounded-full bg-slate-700 px-2 text-white">{topic.articles} articles</div>
                                <div className="h-5 w-5 flex items-center justify-center text-slate-500 group-hover:text-purple-400"><ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400" /></div>
                            </div> 
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </TabsContent>
                <TabsContent value="popular">
                  <PopularArticles articlesData={articlesData} />
                </TabsContent>
                <TabsContent value="faq">
                  <Faq faqData={faqData} />
                </TabsContent>
              </Tabs>
            </div>
  
          </div>
        </section>
  
        {/* Bottom CTA Section */}
        <section className="bg-gradient-to-l m-2 xl:mx-8 rounded-lg from-purple-600 to-blue-600 px-4 py-5 xl:py-7">
          <div className="mx-auto max-w-4xl flex items-center flex-col text-center">
            <MessageCircle className="h-10 mb-4 w-12 text-white" />
            <h2 className="mb-3 text-2xl font-bold">Still Need Help?</h2>
            <p className="mb-8 text-lg text-purple-100">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }
  