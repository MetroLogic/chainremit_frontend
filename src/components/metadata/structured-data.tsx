export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ChainRemit",
    description: "Empowering Global Communities with Decentralized Finance",
    url: "https://chainremit.com",
    logo: "https://chainremit.com/logo.png",
    foundingDate: "2024",
    sameAs: ["https://twitter.com/chainremit", "https://github.com/chainremit", "https://discord.gg/chainremit"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChainRemit",
    url: "https://chainremit.com",
    description: "Send, save, and borrow across borders on StarkNet. Join the future of financial inclusion.",
    publisher: {
      "@type": "Organization",
      name: "ChainRemit",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://starkremit.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChainRemit",
    description: "Decentralized finance platform for global money transfers, microloans, and savings groups",
    url: "https://chainremit.com",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    featureList: [
      "Instant money transfers",
      "Microloans",
      "Savings groups",
      "Crypto credit scoring",
      "Cross-border payments",
      "Low transaction fees",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chainremit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://chainremit.com#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How It Works",
        item: "https://chainremit.com#how-it-works",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ChainRemit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainRemit is a decentralized finance platform built on StarkNet that enables global money transfers, microloans, and savings groups with minimal fees and instant settlement.",
        },
      },
      {
        "@type": "Question",
        name: "How does ChainRemit work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainRemit works in 4 simple steps: 1) Connect your wallet, 2) Verify your identity (optional), 3) Send/receive funds globally, 4) Access loans or join savings groups.",
        },
      },
      {
        "@type": "Question",
        name: "What are the fees for using ChainRemit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChainRemit offers minimal fees for global money transfers thanks to StarkNet's low-cost infrastructure, making it affordable for everyone.",
        },
      },
      {
        "@type": "Question",
        name: "Is ChainRemit secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ChainRemit is built on StarkNet with enterprise-grade security. All transactions are verifiable on-chain and transparent.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
