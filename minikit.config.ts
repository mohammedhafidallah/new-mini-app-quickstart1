// minikit.config.ts
const ROOT_URL = "https://new-mini-app-quickstart1.vercel.app"; // <-- make sure this matches your Vercel URL

export const minikitConfig = {
  accountAssociation: {
    header: "",     // we'll fill these in Step 3
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: "Base Mini App Demo",
    subtitle: "Built on Base • Works in Farcaster",
    description: "A simple Farcaster Mini App running on the Base network.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["base", "miniapp"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Your first Mini App on Base 🚀",
    ogTitle: "Base Mini App Demo",
    ogDescription: "Try Mini Apps on Base — fast, simple, and onchain.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
    // requiredChains: ["eip155:8453"],   // Base mainnet (optional)
    // requiredChains: ["eip155:84532"],  // Base Sepolia (optional)
  },
} as const;
