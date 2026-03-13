export type CWSReview = {
  name: string;
  rating: number;
  text: string;
  date: number; // Unix timestamp in seconds
  avatarUrl?: string;
};

export type ChromeStoreStats = {
  users: number;
  rating: number;
  ratingCount: number;
  reviews: CWSReview[];
};

const EXTENSION_ID = "jkidhonedioaomijgdccandhiffoiheb";
const CWS_URL = `https://chrome.google.com/webstore/detail/${EXTENSION_ID}`;
const CWS_REVIEWS_URL = `https://chromewebstore.google.com/detail/vocabo/${EXTENSION_ID}/reviews`;

export const FALLBACK_REVIEWS: CWSReview[] = [
  {
    name: "Georgie George",
    rating: 5,
    text: "Excellent, love the ability to refresh my vocab as I'm browsing and uncover new words on the fly. The access to so many languages most overlook is a huge advantage over other tools. Really impressed!",
    date: 1753273511,
  },
  {
    name: "Kathi Evers",
    rating: 5,
    text: "I just started using it, and I'm really enjoying it so far. I especially like that you can control the vocabulary by adding words you already know. And it supports traditional Chinese too, which is something apps like Toucan usually don't offer.",
    date: 1737849600,
  },
  {
    name: "Kevin Z",
    rating: 5,
    text: "Simple and great. It would be nice if there is a feature that randomly selects a few words on the webpage and translates it to the language that I want to learn, like the plugin Toucan which doesn't support Russian.",
    date: 1728575418,
  },
];

export const FALLBACK_STATS: ChromeStoreStats = {
  users: 100,
  rating: 4.9,
  ratingCount: 8,
  reviews: FALLBACK_REVIEWS,
};

function parseReviews(html: string): CWSReview[] {
  const ds1Start = html.indexOf("key: 'ds:1'");
  if (ds1Start === -1) return [];

  const dataStart = html.indexOf("data:", ds1Start) + 5;
  const dataEnd = html.indexOf(", sideChannel:", dataStart);
  if (dataEnd === -1) return [];

  const rawData = html.substring(dataStart, dataEnd);

  const reviewPattern =
    /\["[a-f0-9-]+",\["([^"]+)","([^"]*)"\],(\d),("(?:[^"\\]|\\.)*")\,\[(\d+),\d+\]/g;

  const reviews: CWSReview[] = [];
  const seenNames = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = reviewPattern.exec(rawData)) !== null) {
    const name = match[1];
    const rawAvatar = match[2];
    const avatarUrl = rawAvatar
      ? rawAvatar
          .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
            String.fromCharCode(parseInt(hex, 16))
          )
          .replace(/=s32/, "=s80")
      : undefined;
    const rating = parseInt(match[3], 10);
    let text: string;
    try {
      text = JSON.parse(match[4]);
    } catch {
      text = match[4].slice(1, -1);
    }
    const date = parseInt(match[5], 10);
    if (text.length >= 20 && !seenNames.has(name)) {
      seenNames.add(name);
      reviews.push({ name, rating, text, date, avatarUrl });
    }
  }

  return reviews;
}

async function fetchChromeStoreStatsInner(signal: AbortSignal): Promise<ChromeStoreStats> {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  };

  const [statsRes, reviewsRes] = await Promise.all([
    fetch(CWS_URL, { headers, signal }),
    fetch(CWS_REVIEWS_URL, { headers, signal }).catch(() => null),
  ]);

  if (!statsRes.ok) {
    throw new Error(`CWS returned ${statsRes.status}`);
  }

  const html = await statsRes.text();

  const dsStart = html.indexOf("key: 'ds:0'");
  if (dsStart === -1) throw new Error("Could not find ds:0 data");

  const dataStart = html.indexOf("data:", dsStart) + 5;
  const dataEnd = html.indexOf(", sideChannel:", dataStart);
  const rawData = html.substring(dataStart, dataEnd);

  const ratingMatch = rawData.match(
    /^\[\["[a-z]+","https:\/\/[^"]+","[^"]+",(\d+\.?\d*),(\d+)/
  );
  if (!ratingMatch) throw new Error("Could not parse rating");

  const rating = parseFloat(ratingMatch[1]);
  const ratingCount = parseInt(ratingMatch[2], 10);

  const userCountMatch = rawData.match(/\],1,1,(\d+),1,"/);
  const users = userCountMatch
    ? parseInt(userCountMatch[1], 10)
    : FALLBACK_STATS.users;

  let reviews = FALLBACK_REVIEWS;
  if (reviewsRes?.ok) {
    const reviewsHtml = await reviewsRes.text();
    const parsed = parseReviews(reviewsHtml);
    if (parsed.length > 0) {
      reviews = parsed;
    }
  }

  return { users, rating, ratingCount, reviews };
}

export async function fetchChromeStoreStats(): Promise<ChromeStoreStats> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    return await fetchChromeStoreStatsInner(controller.signal);
  } finally {
    clearTimeout(timeoutId);
  }
}
