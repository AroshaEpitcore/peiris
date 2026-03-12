import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Peiris Cleaning Solutions",
  description:
    "Read the Terms & Conditions of Peiris Cleaning Solutions Ltd. Professional cleaning services in Romford, London.",
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
