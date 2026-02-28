import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | London's Trusted Cleaning Service",
  description:
    "Discover why hundreds of London homes and businesses choose Peiris Cleaning Solutions. Eco-friendly products, fully insured team, satisfaction guaranteed, and time-saving professional service.",
  keywords: [
    "why choose Peiris Cleaning",
    "best cleaning company London",
    "trusted cleaners London",
    "insured cleaning service London",
    "satisfaction guaranteed cleaning London",
    "eco-friendly cleaning company London",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/amenities",
  },
  openGraph: {
    title: "Why Choose Us | Peiris Cleaning Solutions London",
    description:
      "Eco-friendly, fully insured, satisfaction guaranteed cleaning services in London. Trusted by 500+ homes and businesses.",
    url: "https://www.peiriscleaningsolutions.co.uk/amenities",
  },
};

export default function AmenitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
