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
  title: "Peiris Cleaning Solution | Professional Cleaning Services",
  description:
    "Professional cleaning services by Peiris Cleaning Solution. We deliver spotless results for homes, offices, and commercial spaces. Get a free quote today.",
  keywords: [
    "cleaning services",
    "professional cleaning",
    "home cleaning",
    "office cleaning",
    "commercial cleaning",
    "deep cleaning",
  ],
  authors: [{ name: "Peiris Cleaning Solution" }],
  openGraph: {
    title: "Peiris Cleaning Solution | Professional Cleaning Services",
    description:
      "Professional cleaning services by Peiris Cleaning Solution. Spotless results guaranteed.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bricolage.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
