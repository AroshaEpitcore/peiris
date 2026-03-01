import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services in London | Domestic, Deep & Office Cleaning",
  description:
    "Explore our full range of professional cleaning services in London — domestic cleaning, deep cleaning, end of tenancy cleaning, and office cleaning. Eco-friendly & satisfaction guaranteed.",
  keywords: [
    "cleaning services London",
    "domestic cleaning London",
    "deep cleaning London",
    "end of tenancy cleaning London",
    "office cleaning London",
    "professional cleaning company London",
    "house cleaning services London",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/services",
  },
  openGraph: {
    title: "Cleaning Services in London | Peiris Cleaning Solutions",
    description:
      "Domestic, deep, end of tenancy & office cleaning in London. All services include eco-friendly products, professional equipment & satisfaction guarantee.",
    url: "https://www.peiriscleaningsolutions.co.uk/services",
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
