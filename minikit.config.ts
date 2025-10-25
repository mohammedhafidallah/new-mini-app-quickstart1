// minikit.config.ts
// Farcaster Mini App configuration for Cubey

const ROOT_URL = "https://new-mini-app-quickstart1.vercel.app";

export const minikitConfig = {
  // 👇 Your Farcaster account association (these are your real values)
  accountAssociation: {
    header:
      "eyJmaWQiOjUzMTUyOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDZENjc0MzhlZTY0Njk2RGY2NDA2MDk1ZWU4MTNjMzA4MDIyRDZENDEifQ",
    payload:
      "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydDEudmVyY2VsLmFwcCJ9",
    signature:
      "iKzs7lTppU+ykJcztNfOFKJS/RnwZ78T0gKM2Mi60dMDdBiz08r54p/ttKG6sDidDeqr+t1n0IymPFUbU81vTBs=",
  },

  // 👇 Mini app metadata (this shows on Farcaster)
  miniapp: {
    version: "1",
    name: "Cubey",
    subtitle: "Your AI Ad Companion",
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
    ogTitle: "Cubey",
    ogDescription: "Your AI Ad Companion — built for Farcaster.",
  },
} as const;
