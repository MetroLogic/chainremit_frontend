import Link from "next/link";
import {
  FiTwitter,
  FiGithub,
  FiMessageCircle,
  FiGlobe,
  FiMoon,
} from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Press
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Documentation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Documentation</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                API Docs
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Developer Guide
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Security
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600">
                <HiPaperAirplane className="h-5 w-5 text-white rotate-45" />
              </div>
              <span className="font-semibold text-white">ChainRemit</span>
            </div>
            <span className="text-gray-400">×</span>
            <span className="text-gray-400">MetroLogic</span>
          </div>

          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <FiGlobe className="h-4 w-4 text-gray-400" />
              <select className="bg-transparent text-gray-400 text-sm border-none outline-none">
                <option>English</option>
              </select>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <FiMoon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
