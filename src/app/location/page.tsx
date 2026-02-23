"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Find Us"
        title="Our"
        highlight="Location"
        description="Conveniently located to serve homes and businesses across the Galle district and surrounding areas."
        backgroundImage="https://iili.io/fiMUkXf.jpg"
      />
      <Location />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
