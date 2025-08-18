import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Send,
  Scale,
  Shield,
  CreditCard,
  Users,
  AlertTriangle,
  Gavel,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import TermsSection from "./components/TermsSection";
import TableOfContents from "./components/TableOfContents";
import ImportantNotice from "./components/ImportantNotice";
import ContactSection from "./components/ContactSection";
import Image from "next/image";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          text: "By accessing or using StarkRemit's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
        },
        {
          text: "These terms constitute a legally binding agreement between you and StarkRemit. We may update these terms from time to time, and your continued use of our services constitutes acceptance of any changes.",
        },
      ],
    },
    {
      id: "services",
      title: "Description of Services",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        {
          text: "StarkRemit provides decentralized financial services including money transfers, savings groups, microloans, and credit scoring on the StarkNet blockchain.",
        },
        {
          text: "Our services are provided 'as is' and we reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "User Eligibility",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          text: "You must be at least 18 years old and have the legal capacity to enter into contracts in your jurisdiction to use our services.",
        },
        {
          text: "You must not be located in a country where our services are prohibited or restricted by law or regulation.",
        },
        {
          text: "You are responsible for ensuring that your use of our services complies with all applicable local, state, national, and international laws.",
        },
      ],
    },
    {
      id: "account",
      title: "Account Registration and Security",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          text: "You must provide accurate, current, and complete information during registration and keep your account information updated.",
        },
        {
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        },
        {
          text: "You must immediately notify us of any unauthorized use of your account or any other breach of security.",
        },
      ],
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          text: "You may not use our services for any illegal activities, including but not limited to money laundering, terrorist financing, or fraud.",
        },
        {
          text: "You may not attempt to gain unauthorized access to our systems, interfere with our services, or violate any security measures.",
        },
        {
          text: "You may not use our services to transmit harmful code, spam, or engage in any activity that could damage or impair our services.",
        },
      ],
    },
    {
      id: "financial",
      title: "Financial Terms",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        {
          text: "All transactions are final once confirmed on the blockchain. We cannot reverse completed transactions.",
        },
        {
          text: "You are responsible for all fees associated with your transactions, including network fees and our service fees.",
        },
        {
          text: "We reserve the right to change our fee structure with reasonable notice to users.",
        },
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Gavel className="w-5 h-5" />,
      content: [
        {
          text: "Our services are provided 'as is' without warranties of any kind. We disclaim all warranties, express or implied.",
        },
        {
          text: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
        },
        {
          text: "Our total liability to you for any claims arising from these terms or your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          text: "We may terminate or suspend your account and access to our services at any time, with or without cause, with or without notice.",
        },
        {
          text: "You may terminate your account at any time by contacting our support team.",
        },
        {
          text: "Upon termination, your right to use our services will cease immediately, but these terms will remain in effect as to prior use.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
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
            </div>
            {/* <span className="text-xl font-bold">StarkRemit</span> */}
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Terms of Service
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Please read these terms carefully before using StarkRemit's
            services. By using our platform, you agree to these terms and
            conditions.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <span>Last updated: December 15, 2024</span>
            <span>•</span>
            <span>Effective: December 15, 2024</span>
          </div>
        </div>

        {/* Important Notice */}
        <ImportantNotice />

        {/* Table of Contents */}
        <TableOfContents sections={sections} />

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <TermsSection key={section.id} {...section} />
          ))}
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
