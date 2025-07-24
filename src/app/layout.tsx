import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "../components/metadata/structured-data";
import ClientProviders from "@/components/blockchain/client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ChainRemit - Empowering Global Communities with Decentralized Finance",
  description:
    "Send, save, and borrow across borders on StarkNet. Join the future of financial inclusion with instant money transfers, microloans, and savings groups.",
  keywords: [
    "DeFi",
    "decentralized finance",
    "StarkNet",
    "money transfer",
    "remittance",
    "microloans",
    "savings groups",
    "crypto",
    "blockchain",
    "financial inclusion",
    "cross-border payments",
    "Web3 finance",
  ],
  authors: [{ name: "ChainRemit Team" }],
  creator: "ChainRemit",
  publisher: "ChainRemit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chainremit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chainremit.com",
    title:
      "ChainRemit - Empowering Global Communities with Decentralized Finance",
    description:
      "Send, save, and borrow across borders on StarkNet. Join the future of financial inclusion with instant money transfers, microloans, and savings groups.",
    siteName: "ChainRemit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChainRemit - Decentralized Finance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ChainRemit - Empowering Global Communities with Decentralized Finance",
    description:
      "Send, save, and borrow across borders on StarkNet. Join the future of financial inclusion.",
    images: ["/twitter-image.png"],
    creator: "@chainremit",
    site: "@chainremit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
