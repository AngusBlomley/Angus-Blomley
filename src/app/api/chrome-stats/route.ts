import { NextResponse } from "next/server";
import {
  fetchChromeStoreStats,
  FALLBACK_STATS,
  type ChromeStoreStats,
} from "@/lib/chromeStoreStats";

let cachedStats: ChromeStoreStats | null = null;
let cachedAt = 0;
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

export async function GET() {
  const now = Date.now();
  if (cachedStats && now - cachedAt < CACHE_DURATION_MS) {
    return NextResponse.json(cachedStats, {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=3600",
      },
    });
  }

  try {
    const stats = await fetchChromeStoreStats();
    cachedStats = stats;
    cachedAt = now;
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    console.error("Failed to fetch Chrome Store stats:", err);
    return NextResponse.json(cachedStats ?? FALLBACK_STATS, {
      headers: {
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  }
}
