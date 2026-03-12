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
import HomeContact from "@/components/HomeContact";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const homeFAQs = [
  {
    question: "What areas do you cover?",
    answer: "We cover all areas across London and the surrounding regions, including Romford, Ilford, Barking, Stratford, Canary Wharf, and more. Not sure if we cover your area? Give us a call on 07903 599828 and we'll confirm.",
  },
  {
    question: "Are your cleaners insured and vetted?",
    answer: "Yes. Every cleaner on our team is fully insured, background-checked, and trained to our high standards. You can welcome us into your home with complete confidence.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes, we bring all the professional-grade, eco-friendly cleaning products and equipment needed. You don't need to provide anything unless you have a specific product preference.",
  },
  {
    question: "Can I book a one-off clean?",
    answer: "Absolutely. We offer flexible one-off cleans as well as regular weekly, fortnightly, or monthly schedules — whatever suits your lifestyle best.",
  },
  {
    question: "How do I get a free quote?",
    answer: "Simply fill in the contact form on this page, send us a WhatsApp message, or call 07903 599828. We'll get back to you promptly with a no-obligation quote.",
  },
  {
    question: "What if I'm not satisfied with the clean?",
    answer: "Your satisfaction is our priority. If you're not completely happy, contact us within 24 hours and we'll return to re-clean the affected areas at absolutely no extra cost.",
  },
];

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
      <FAQ
        faqs={homeFAQs}
        badge="FAQ"
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Got questions? We've got answers. Everything you need to know before booking your clean."
        bg="bg-muted/40"
      />
      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
