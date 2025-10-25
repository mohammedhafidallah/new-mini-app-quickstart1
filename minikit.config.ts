// minikit.config.ts
// Farcaster Mini App manifest configuration for your app

const ROOT_URL = "https://new-mini-app-quickstart1.vercel.app"; // make sure this matches your live Vercel URL

export const minikitConfig = {
  // 👇 Account Association (your verified Farcaster signature)
  accountAssociation: {
    header: "eyJmaWQiOjUzMTUyOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDZENjc0MzhlZTY0Njk2RGY2NDA2MDk1ZWU4MTNjMzA4MDIyRDZENDEifQ",
    payload: "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydDEudmVyY2VsLmFwcCJ9",
    signature: "iKzs7lTppU+ykJcztNfOFKJS/RnwZ78T0gKM2Mi60dMDdBiz08r54p/ttKG6sDidDeqr+t1n0IymPFUbU81vTBs=",
  },

  // 👇 Your mini app metadata (display details inside Farcaster)
  miniapp: {
    version: "1",
    name: "Cubey",
    subtitle: "Your AI Ad Companion",
    description: "Ads",
    screenshotUrls: [
      `${ROOT_URL}/screenshot-portrait.png`,
    ],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Your first Mini App on Farcaster 🚀",
    ogTitle: "Cubey",
    ogDescription: "Your AI Ad Companion — built for Farcaster.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
    // Optional: specify Base chain if you later want to use onchain features
    // requiredChains: ["eip155:8453"],   // Base mainnet
    // requiredChains: ["eip155:84532"],  // Base Sepolia (testnet)
  },
} as const;
