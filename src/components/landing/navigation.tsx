"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { HiMenu, HiX, HiPaperAirplane } from "react-icons/hi";
import { Button } from "../ui/button";
import Image from "next/image";

interface NavigationProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export function Navigation({ setIsModalOpen }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center">
            {/* Light theme image */}
            <Image
              src="/Logo and text-4.png"
              alt="ChainRemit Logo"
              width={200}
              height={70}
              className="w-[200px] h-[70px] object-fill block dark:hidden"
            />
            {/* Dark theme image */}
            <Image
              src="/Logo and text-3.png"
              alt="ChainRemit Logo"
              width={200}
              height={70}
              className="w-[200px] h-[70px] object-fill hidden dark:block"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/demo"
            className="text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/about"
            className="text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/help"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Help
          </Link>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Log In</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 border-l border-gray-200 dark:border-gray-700">
            <div className="flex flex-col h-full bg-white/95 dark:bg-gray-900/95">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                    <Send className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-lg font-bold cursor-pointer">
                    StarkRemit
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6 bg-white/95 dark:bg-gray-900/95">
                <nav className="space-y-1 px-4">
                  <Link
                    href="#features"
                    onClick={closeMenu}
                    className="block px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="/demo"
                    onClick={closeMenu}
                    className="block px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Demo
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/help"
                    onClick={closeMenu}
                    className="block px-4 py-3 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Help
                  </Link>
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 border-t bg-white/95 dark:bg-gray-900/95 cursor-pointer dark:border-gray-800 space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href="/auth/login">Log In</Link>
                </Button>
                <Button
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
