import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Peiris Cleaning Solutions",
  description:
    "Learn how Peiris Cleaning Solutions Ltd. collects, uses, and protects your personal data in accordance with UK GDPR and data protection law.",
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
