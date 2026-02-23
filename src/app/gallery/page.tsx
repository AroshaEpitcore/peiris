"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";
import NeedClean from "@/components/NeedClean";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Our Work"
        title="Our"
        highlight="Gallery"
        description="See the results of our professional cleaning services and the spaces we've transformed."
        backgroundImage="https://iili.io/fiMUWgI.jpg"
      />
      <Gallery />
      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
