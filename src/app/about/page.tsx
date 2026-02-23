"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Our Story"
        title="About"
        highlight="Peiris Cleaning"
        description="Discover the story behind our commitment to delivering spotless, professional cleaning services."
        backgroundImage="https://iili.io/fiM4hdB.jpg"
      />
      <About />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
