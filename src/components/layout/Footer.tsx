import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-200/95 dark:bg-slate-950/95 text-gray-950 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="border border-gray-300 dark:border-gray-700 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5 md:gap-6 mb-8 p-6 md:p-10 rounded-lg">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="hover:text-white">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white">
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bord border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              {/* Light theme image */}
              <Image
                src="/Logo and text-4.png"
                alt="ChainRemit Logo"
                width={120}
                height={50}
                className="w-[120px] h-[50px]  object-fill block dark:hidden"
              />
              {/* Dark theme image */}
              <Image
                src="/Logo and text-3.png"
                alt="ChainRemit Logo"
                width={120}
                height={50}
                className="w-[120px] h-[50px]  object-fill hidden dark:block"
              />
            </Link>
            <span className="text-gray-500">×</span>
            <span className="">MetroLogic</span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm">
              <option>English</option>
              <option>Hausa</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>中文</option>
              <option>Português</option>
              <option>Русский</option>
              <option>Türkçe</option>
              <option>Polski</option>
              <option>Italiano</option>
            </select>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
