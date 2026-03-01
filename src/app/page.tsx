"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeAbout from "@/components/HomeAbout";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import ChooseUs from "@/components/ChooseUs";
import Amenities from "@/components/Amenities";
import MarqueeSection from "@/components/MarqueeSection";
import NeedClean from "@/components/NeedClean";
import ExpandImg from "@/components/ExpandImg";
import Location from "@/components/Location";
import HomeContact from "@/components/HomeContact";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HomeAbout />
      <ChooseUs />
      <Rooms />
      <HomeContact />
      <Reviews />
      <ExpandImg />
      <MarqueeSection />
      <Amenities />
      {/* <Location /> */}
       <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
