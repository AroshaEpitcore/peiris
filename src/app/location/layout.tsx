import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Cleaning Services Across London",
  description:
    "Peiris Cleaning Solutions serves homes and businesses across London. Find out if we cover your area. Professional cleaning services available throughout Greater London.",
  keywords: [
    "cleaning services near me London",
    "London cleaning service areas",
    "cleaners near me London",
    "Greater London cleaning company",
    "local cleaners London",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/location",
  },
  openGraph: {
    title: "Service Areas | Peiris Cleaning Solutions London",
    description:
      "Professional cleaning services available across London. Find out if we cover your area.",
    url: "https://www.peiriscleaningsolutions.co.uk/location",
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
