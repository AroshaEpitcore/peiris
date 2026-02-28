import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | London's Trusted Cleaning Company",
  description:
    "Learn about Peiris Cleaning Solutions — London's trusted professional cleaning company. Experienced staff, eco-friendly products, and a passion for spotless results since day one.",
  keywords: [
    "about Peiris Cleaning Solutions",
    "London cleaning company",
    "professional cleaners London",
    "trusted cleaning service London",
    "eco-friendly cleaners London",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/about",
  },
  openGraph: {
    title: "About Us | Peiris Cleaning Solutions London",
    description:
      "Meet the team behind Peiris Cleaning Solutions. Professional, reliable, and eco-friendly cleaning services across London.",
    url: "https://www.peiriscleaningsolutions.co.uk/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
