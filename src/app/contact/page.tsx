"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactMethods from "@/components/contact/ContactMethods";
import SupportHours from "@/components/contact/SupportHours";
import QuickHelp from "@/components/contact/QuickHelp";
import OfficeLocations from "@/components/contact/OfficeLocations";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/95 dark:bg-slate-900/95">
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
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need help? We're here to assist you. Reach out to
            our team and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactMethods />
            <SupportHours />
          </div>
        </div>
        <QuickHelp />
        <OfficeLocations />
      </div>
    </div>
  );
}
