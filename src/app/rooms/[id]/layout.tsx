import type { Metadata } from "next";

const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  "domestic-cleaning": {
    title: "Domestic Cleaning Services in London",
    description:
      "Professional domestic cleaning services in London by Peiris Cleaning Solutions. Regular or occasional home cleaning including dusting, vacuuming, mopping, kitchen & bathroom cleaning. Free quote available.",
    keywords: [
      "domestic cleaning London",
      "house cleaning London",
      "home cleaning service London",
      "regular cleaning London",
      "weekly cleaning London",
      "fortnightly cleaning London",
    ],
  },
  "deep-cleaning": {
    title: "Deep Cleaning Services in London",
    description:
      "Intensive deep cleaning services in London. Perfect for spring cleans, before/after events or when your property needs extra care. Eco-friendly products & experienced staff. Book a free quote today.",
    keywords: [
      "deep cleaning London",
      "spring cleaning London",
      "intensive cleaning service London",
      "professional deep clean London",
      "one-off deep cleaning London",
    ],
  },
  "end-of-tenancy-cleaning": {
    title: "End of Tenancy Cleaning London | Move In & Move Out",
    description:
      "Professional end of tenancy cleaning in London meeting landlord and letting agent standards. Full property clean for tenants moving in or out. Trusted by landlords across London. Get a free quote.",
    keywords: [
      "end of tenancy cleaning London",
      "move out cleaning London",
      "move in cleaning London",
      "tenancy cleaning London",
      "landlord cleaning London",
      "letting agent cleaning London",
      "checkout cleaning London",
    ],
  },
  "office-cleaning": {
    title: "Office & Commercial Cleaning Services in London",
    description:
      "Professional office and commercial cleaning services in London. Regular or scheduled cleaning to maintain a clean, hygienic work environment. Trusted by businesses across London. Contact us for a quote.",
    keywords: [
      "office cleaning London",
      "commercial cleaning London",
      "business cleaning London",
      "workplace cleaning London",
      "professional office cleaners London",
      "scheduled office cleaning London",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = serviceMetadata[id];

  if (!meta) {
    return {
      title: "Cleaning Service in London",
      description: "Professional cleaning services in London by Peiris Cleaning Solutions.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://www.peiriscleaningsolutions.co.uk/rooms/${id}`,
    },
    openGraph: {
      title: `${meta.title} | Peiris Cleaning Solutions`,
      description: meta.description,
      url: `https://www.peiriscleaningsolutions.co.uk/rooms/${id}`,
    },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
