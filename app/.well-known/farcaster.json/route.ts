import { NextResponse } from "next/server";
import { minikitConfig } from "@/minikit.config";

export async function GET() {
  const manifest = {
    accountAssociation: minikitConfig.accountAssociation,
    miniapp: minikitConfig.miniapp,
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
