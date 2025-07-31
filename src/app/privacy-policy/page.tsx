import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Send, Shield, Users, Eye, Database, Lock } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import PrivacyGlance from "./components/PrivacyGlance";
import TableOfContents from "./components/TableOfContents";
import ContentSection from "./components/ContentSection";
import ContactSection from "./components/ContactSection";

export default function PrivacyPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        {
          title: "Personal Information",
          text: " We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
        },
        {
          title: "Usage Information",
          text: " We automatically collect information about your use of our services, including transaction data, device information, and usage patterns.",
        },
        {
          title: "Blockchain Data",
          text: "As a blockchain-based service, certain transaction data is publicly available on the StarkNet blockchain.",
        },
      ],
    },
    {
      id: "account",
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          title: "Service Provision",
          text: "We use your information to provide, maintain, and improve our financial services, including processing transactions and managing your account.",
        },
        {
          title: "Security and Compliance",
          text: "We use your information to verify your identity, prevent fraud, and comply with legal and regulatory requirements.",
        },
        {
          title: "Communication",
          text: "We may use your information to send you service-related communications, updates, and marketing materials (with your consent).",
        },
      ],
    },
    {
      id: "services",
      title: "Information Sharing",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          title: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our platform.",
        },
        {
          title: "Legal Reqiurements ",
          text: "We may disclose your information id required by the law, regulation, or legal process.",
        },
        {
          title: "Buisness Transfers",
          text: "In the event of a merger, acquisition, or sales of assets, your information may be transferred as part of that transaction.",
        },
      ],
    },
    {
      id: "prohibited",
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          title: "Encryption ",
          text: "We use industry- standard encryption to protect your data both in transit and at rest. ",
        },
        {
          title: "Access Controls ",
          text: "We implement strict access controls and regularly audit our systems to ensure data security. ",
        },
        {
          title: "Incident Response",
          text: "We have procedures in place to detect, respond to, and recover from security incidents.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "Your rights",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          title: "Access and Correction ",
          text: "You have the right to access and correct your personal information. ",
        },
        {
          title: " Data Portability",
          text: "You can request a copy of your data in a machine- readable format.",
        },
        {
          title: "Deletion ",
          text: "You can request deletion of your personal information, subject to legal and regulatory requirements. ",
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
            <Link href="/">
              <Image
                src="/Logo and text-3.png"
                alt="ChainRemit Logo"
                width={150}
                height={50}
                className="w-[150px] h-[50px] object-fill"
              />
            </Link>
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
            Privacy Policy
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            We are committed to protecting your privacy and being transparent
            about how we collect, use, and share your information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <span>Last updated: December 15, 2024</span>
            <span>•</span>
            <span>Effective: December 15, 2024</span>
          </div>
        </div>

        {/* Privacy at a glance */}
        <PrivacyGlance />

        {/* Table of Contents */}
        <TableOfContents sections={sections} />

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <ContentSection key={section.id} {...section} />
          ))}
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
