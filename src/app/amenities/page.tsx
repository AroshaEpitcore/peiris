"use client";

import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Amenities from "@/components/Amenities";
import NeedClean from "@/components/NeedClean";
import ExpandImg from "@/components/ExpandImg";
import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";

import ScrollToTop from "@/components/ScrollToTop";

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Why Choose Us"
        title="The Peiris"
        highlight="Difference"
        description="We go above and beyond to deliver cleaning services that set the standard for quality and professionalism."
        backgroundImage="/images/herobanner2.jpg"
      />
      <HomeAbout />
      <ExpandImg />
      <Amenities />
      
      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
