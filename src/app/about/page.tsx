"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import HomeAbout from "@/components/HomeAbout";
import MarqueeSection from "@/components/MarqueeSection";
import NeedClean from "@/components/NeedClean";
import ExpandImg from "@/components/ExpandImg";
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
        backgroundImage="/images/herobanner.jpg"
      />
       <HomeAbout />
        <ExpandImg />
      <MarqueeSection />
     
      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
