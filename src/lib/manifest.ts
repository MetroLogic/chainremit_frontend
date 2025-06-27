import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChainRemit - Decentralized Finance Platform",
    short_name: "ChainRemit",
    description: "Send, save, and borrow across borders on StarkNet. Join the future of financial inclusion.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e293b",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
