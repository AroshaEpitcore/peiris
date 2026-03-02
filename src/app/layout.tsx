import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peiriscleaningsolutions.co.uk"),
  title: {
    default: "Peiris Cleaning Solutions | Professional Cleaning Services in London",
    template: "%s | Peiris Cleaning Solutions London",
  },
  description:
    "Peiris Cleaning Solutions offers professional domestic, deep, end of tenancy, and office cleaning services across London. Trusted, affordable & eco-friendly. Call 07903 599828 for a free quote.",
  keywords: [
    "cleaning services London",
    "cleaning services Romford",
    "domestic cleaning London",
    "deep cleaning London",
    "end of tenancy cleaning London",
    "office cleaning London",
    "house cleaning Romford",
    "professional cleaners London",
    "eco-friendly cleaning London",
    "reliable cleaning services London",
    "affordable cleaning London",
    "Peiris Cleaning Solutions",
    "London cleaning company",
    "local cleaners Romford",
    "commercial cleaning London",
  ],
  authors: [{ name: "Peiris Cleaning Solutions" }],
  creator: "Peiris Cleaning Solutions",
  publisher: "Peiris Cleaning Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.peiriscleaningsolutions.co.uk",
    siteName: "Peiris Cleaning Solutions",
    title: "Peiris Cleaning Solutions | Professional Cleaning Services in London",
    description:
      "Professional domestic, deep, end of tenancy & office cleaning services across London. Eco-friendly products. Call 07903 599828 for a free quote.",
    images: [
      {
        url: "/images/herobanner.jpg",
        width: 1200,
        height: 630,
        alt: "Peiris Cleaning Solutions - Professional Cleaning Services in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peiris Cleaning Solutions | Professional Cleaning Services in London",
    description:
      "Professional cleaning services in London. Domestic, deep, end of tenancy & office cleaning. Free quotes. Call 07903 599828.",
    images: ["/images/herobanner.jpg"],
  },
  alternates: {
    canonical: "https://www.peiriscleaningsolutions.co.uk",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Peiris Cleaning Solutions",
  description:
    "Professional domestic, deep, end of tenancy, and office cleaning services across London. Eco-friendly products and trained staff.",
  url: "https://www.peiriscleaningsolutions.co.uk",
  telephone: "+447903599828",
  email: "Info@peiriscleaningsolutions.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 2a Chase Cross Road",
    addressLocality: "Romford",
    addressRegion: "Greater London",
    postalCode: "RM5 3PR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5930,
    longitude: 0.1899,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "££",
  areaServed: {
    "@type": "City",
    name: "London",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Tenancy Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  sameAs: [
    "https://wa.me/447903599828",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        {/* Fixed decorative side images — desktop only */}
        <img
          src="/images/sideimage1.png"
          alt=""
          aria-hidden="true"
          className="hidden xl:block fixed left-0 top-[30%] h-64 object-contain pointer-events-none opacity-20 z-[1]"
        />
        <img
          src="/images/sideimage2.png"
          alt=""
          aria-hidden="true"
          className="hidden xl:block fixed right-0 top-[55%] h-64 object-contain pointer-events-none opacity-20 z-[1]"
        />
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
