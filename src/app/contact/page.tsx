"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Get in Touch"
        title="Contact"
        highlight="& Get a Quote"
        description="Ready for a spotless space? Reach out to Peiris Cleaning Solution for a free consultation."
        backgroundImage="https://iili.io/fiMUezG.jpg"
      />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
