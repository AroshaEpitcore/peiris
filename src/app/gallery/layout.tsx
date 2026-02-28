import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Our Cleaning Work in London",
  description:
    "Browse our gallery of professional cleaning work across London. See the spotless results delivered by Peiris Cleaning Solutions for homes, offices, and commercial spaces.",
  keywords: [
    "cleaning gallery London",
    "before and after cleaning London",
    "professional cleaning results London",
    "Peiris Cleaning Solutions gallery",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/gallery",
  },
  openGraph: {
    title: "Gallery | Peiris Cleaning Solutions London",
    description:
      "See the spotless results delivered by Peiris Cleaning Solutions. Browse our cleaning gallery for homes, offices & commercial spaces in London.",
    url: "https://www.peiriscleaningsolutions.co.uk/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
