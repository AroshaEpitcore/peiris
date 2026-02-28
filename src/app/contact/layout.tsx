import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Cleaning Quote in London",
  description:
    "Contact Peiris Cleaning Solutions for a free cleaning quote in London. Call 07903 599828, WhatsApp us, or send an email. We reply within 24 hours. Available Mon–Fri 8am–6pm, Sat 9am–4pm.",
  keywords: [
    "contact cleaning company London",
    "free cleaning quote London",
    "book cleaning service London",
    "cleaning company phone number London",
    "get cleaning quote London",
  ],
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/contact",
  },
  openGraph: {
    title: "Contact Us | Get a Free Cleaning Quote in London",
    description:
      "Get in touch with Peiris Cleaning Solutions for a free quote. Call 07903 599828 or WhatsApp us today.",
    url: "https://www.peiriscleaningsolutions.co.uk/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
