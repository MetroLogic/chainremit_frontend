"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { HiPaperAirplane } from "react-icons/hi";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-4 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <HiPaperAirplane className="h-5 w-5 text-white rotate-45" />
            </div>
            <span className="text-xl font-bold text-white">ChainRemit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="/auth/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <button className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#dashboard"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <button className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
