"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const contactFAQs = [
  {
    question: "How do I book a cleaning service?",
    answer: "You can book by filling in the form above, sending us a WhatsApp message, or calling 07903 599828. We'll confirm your booking and send all details via WhatsApp or email.",
  },
  {
    question: "How quickly can you start?",
    answer: "In many cases we can arrange a clean within 24–48 hours. For larger jobs or recurring bookings, we'll agree a convenient start date during your initial enquiry.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "Not necessarily. Many clients provide a key or entry code. We are fully insured and all cleaners are vetted, so you can trust us to work in your property unsupervised.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We ask for at least 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice may be subject to a fee of up to 50% of the agreed cost.",
  },
  {
    question: "How do I pay?",
    answer: "Payment is due upon completion of the service unless otherwise agreed. We accept bank transfer, cash, and card payments for your convenience.",
  },
  {
    question: "Can I set up a regular cleaning schedule?",
    answer: "Yes — we offer weekly, fortnightly, and monthly recurring plans at preferential rates. Just mention your preferred frequency when you get in touch and we'll tailor a plan for you.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Contact />
      <FAQ
        faqs={contactFAQs}
        badge="Booking FAQ"
        title="Booking &"
        titleHighlight="Payment Questions"
        description="Quick answers to the most common questions about booking and working with us."
        bg="bg-muted/40"
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
