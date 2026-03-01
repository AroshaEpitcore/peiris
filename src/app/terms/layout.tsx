import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Privacy & Refund Policy",
  description:
    "Read the Terms & Conditions, Privacy Policy, and Refund Policy of Peiris Cleaning Solutions Ltd. Professional cleaning services in London.",
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
