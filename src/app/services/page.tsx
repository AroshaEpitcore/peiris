"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import NeedClean from "@/components/NeedClean";
import ExpandImg from "@/components/ExpandImg";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Check, ArrowRight, ChevronLeft, ChevronRight, Home, Building2 } from "lucide-react";

const services = [
  {
    id: "domestic-cleaning",
    name: "Domestic Cleaning",
    description:
      "Regular or occasional cleaning to keep homes clean, tidy, and hygienic.",
    image: "/images/domestic.jpg",
    images: [
      "/images/domestic.jpg",
      "/images/domestic2.jpg",
      "/images/domestic3.jpg",
    ],
    type: "home",
    features: [
      "Dusting all surfaces",
      "Vacuuming carpets & rugs",
      "Mopping hard floors",
      "Cleaning kitchen surfaces",
      "Wiping external kitchen appliances",
      "Cleaning sinks & taps",
      "Bathroom cleaning (toilet, sink, bath, shower)",
      "Emptying bins",
    ],
    idealFor: "Weekly, fortnightly, or monthly home cleaning.",
    popular: false,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    description:
      "A more detailed and intensive clean than regular domestic cleaning.",
    image: "/images/deep-cleaning.jpg",
    images: [
      "/images/deep-cleaning.jpg",
      "/images/deep-cleaning2.jpg",
      "/images/deep-cleaning3.jpg",
    ],
    type: "home",
    features: [
      "All domestic cleaning tasks",
      "Deep cleaning of kitchen (inside cupboards, detailed surfaces)",
      "Descaling taps, sinks, and shower areas",
      "Cleaning skirting boards",
      "Cleaning doors, frames & handles",
      "Removing grease and built-up dirt",
      "Extra attention to bathrooms and kitchens",
    ],
    idealFor: "Spring cleaning, before/after events, or when the property needs extra care.",
    popular: true,
  },
  {
    id: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    description:
      "A full clean of the property when tenants are moving in or out, meeting landlord and letting agent standards.",
    image: "/images/end-of-tenancy-cleaning.jpg",
    images: [
      "/images/end-of-tenancy-cleaning.jpg",
      "/images/end-of-tenancy-cleaning2.jpg",
      "/images/end-of-tenancy-cleaning3.jpg",
    ],
    type: "home",
    features: [
      "Full kitchen clean (inside & outside cupboards, oven exterior)",
      "Bathroom deep clean (toilets, showers, tiles, sinks)",
      "Vacuuming & mopping all floors",
      "Cleaning skirting boards",
      "Cleaning doors, frames & handles",
      "Internal windows (where accessible)",
      "Removal of dust and dirt throughout the property",
    ],
    addOn: "Professional carpet steam cleaning (if requested)",
    idealFor: "Tenants, landlords, and letting agents.",
    popular: true,
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    description:
      "Regular or scheduled cleaning to maintain a clean and professional work environment.",
    image: "/images/Office Cleaning.jpg",
    images: [
      "/images/Office Cleaning.jpg",
      "/images/Office Cleaning2.jpg",
      "/images/Office Cleaning3.jpg",
    ],
    type: "commercial",
    features: [
      "Cleaning desks & work surfaces",
      "Vacuuming carpets & mopping floors",
      "Cleaning kitchens/break areas",
      "Cleaning toilets & washrooms",
      "Emptying bins",
      "Cleaning doors, handles & touch points",
    ],
    idealFor: "Offices, small businesses, and commercial spaces.",
    popular: false,
  },
];

// Image Carousel Component
function ImageCarousel({ images, serviceName }: { images: string[]; serviceName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden group">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${serviceName} in London - image ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover block transition-opacity duration-700 ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-200 shadow-sm ${
                index === currentIndex ? "bg-white w-5" : "bg-white/50 hover:bg-white/80 w-1.5"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RoomsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageBanner
        badge="Our Services"
        title="Our"
        highlight="Services"
        description="Choose from our range of professional cleaning services, each designed to deliver spotless results."
        backgroundImage="/images/herobanner.jpg"
      />

      <section className="bg-background">
        <div className="container">
          {/* Service Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`relative bg-card rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                  service.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image Carousel */}
                <div className="relative">
                  <ImageCarousel images={service.images} serviceName={service.name} />
                  <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {service.type === "home" ? (
                        <Home className="w-5 h-5 text-white" />
                      ) : (
                        <Building2 className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-5">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Optional Add-on */}
                  {"addOn" in service && (
                    <div className="mb-4 flex items-start gap-2 text-sm bg-accent/10 border border-accent/30 rounded-xl px-3 py-2">
                      <span className="font-semibold text-primary-dark">Optional Add-on:</span>
                      <span className="text-muted-foreground">{(service as typeof service & { addOn: string }).addOn}</span>
                    </div>
                  )}

                  {/* Ideal For */}
                  <div className="text-sm bg-muted rounded-xl px-4 py-3 mb-6">
                    <span className="font-semibold text-foreground">Ideal for: </span>
                    <span className="text-muted-foreground">{service.idealFor}</span>
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${service.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn w-full flex items-center gap-2 ${
                        service.popular ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-lg mb-4">
              All services include eco-friendly products, professional equipment, and satisfaction guarantee.
            </p>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline cursor-pointer"
              >
                Contact us for custom cleaning packages and recurring plans
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ExpandImg />
      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
