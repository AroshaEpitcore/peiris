"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import NeedClean from "@/components/NeedClean";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Star,
} from "lucide-react";

const services = [
  {
    id: "domestic-cleaning",
    name: "Domestic Cleaning",
    description:
      "Regular or occasional cleaning to keep homes clean, tidy, and hygienic.",
    longDescription:
      "Our Domestic Cleaning service is designed to keep your home consistently clean, tidy, and hygienic. Whether you need a weekly refresh, fortnightly visits, or a one-off clean, our trained professionals arrive fully equipped with eco-friendly products.\n\nWe cover all the essentials — dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning kitchen surfaces, wiping down external appliances, cleaning sinks and taps, giving bathrooms a thorough clean (toilet, sink, bath, and shower), and emptying bins.\n\nPerfect for busy families and working professionals who want a clean home without the effort. We work around your schedule so your day is never disrupted.",
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
    longDescription:
      "Our Deep Cleaning service goes far beyond a standard domestic clean. This is a thorough, detailed clean that targets every hidden corner, built-up grime, and neglected surface to leave your home truly spotless.\n\nIn addition to all standard domestic cleaning tasks, we deep clean the kitchen (inside cupboards and detailed surfaces), descale taps, sinks, and shower areas, clean skirting boards, wipe down doors, frames, and handles, and remove grease and built-up dirt throughout — with extra attention given to bathrooms and kitchens.\n\nIdeal for spring cleaning, before or after events, or simply when your home needs a thorough reset. Our team is trained to handle even the most challenging spaces with care.",
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
    longDescription:
      "Our End of Tenancy Cleaning service is a comprehensive clean designed to meet the standards required by landlords and letting agents. Whether you're a tenant moving out, a landlord preparing for new tenants, or a letting agent managing a property, we ensure the property is left in pristine condition.\n\nWe cover every area from top to bottom — a full kitchen clean (inside and outside cupboards and oven exterior), a deep bathroom clean (toilets, showers, tiles, and sinks), vacuuming and mopping all floors, cleaning skirting boards, doors, frames and handles, internal windows where accessible, and removal of all dust and dirt throughout the property.\n\nOptional add-on available: Professional carpet steam cleaning on request for a truly complete handover.",
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
    longDescription:
      "A clean office is a productive office. Our Office Cleaning service is designed for businesses of all sizes that want to maintain a spotless, hygienic, and professional environment for their staff and visitors.\n\nWe clean and sanitise desks and work surfaces, vacuum carpets and mop floors, keep kitchen and break areas fresh and hygienic, clean toilets and washrooms, empty bins, and wipe down doors, handles, and touch points throughout the office.\n\nWe can schedule cleaning around your business hours — early morning, evenings, or weekends — so your operations are never disrupted. Ideal for offices, small businesses, and commercial spaces of all kinds.",
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

export default function ServiceDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = services.find((s) => s.id === params.id);

  useEffect(() => {
    if (!service || service.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [service]);

  if (!service) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </motion.button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + service.images.length) % service.images.length
    );
  };

  const addOn = "addOn" in service ? (service as typeof service & { addOn: string }).addOn : null;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Image Gallery */}
      <section className="relative h-96 md:h-[65vh] overflow-hidden">
        {service.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${service.name} ${i + 1}`}
            className={`absolute inset-0 w-full h-full max-[575px]:!h-full object-cover transition-opacity duration-500 ${
              i === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back Button */}
        <Link href="/rooms" className="absolute top-20 left-4 md:left-6 z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>
        </Link>

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-20 right-4 md:right-6 z-10">
            <span className="px-3 py-1.5 rounded-full bg-primary text-white text-xs md:text-sm font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-white" />
              Popular
            </span>
          </div>
        )}

        {/* Navigation Arrows */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>

        {/* Title overlay — flex pushes it to the bottom reliably on all screen sizes */}
        <div className="absolute inset-0 flex flex-col justify-end z-10 pb-10 pointer-events-none">
          <div className="container px-4 md:px-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs mb-2">
              {service.type === "home" ? (
                <Home className="w-3.5 h-3.5" />
              ) : (
                <Building2 className="w-3.5 h-3.5" />
              )}
              {service.type === "home" ? "Home" : "Commercial"} Service
            </span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
            >
              {service.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 mt-1.5 text-sm md:text-lg max-w-xl line-clamp-2 md:line-clamp-none"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Type badge — hidden on mobile, already shown in hero overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium capitalize">
                  {service.type === "home" ? (
                    <Home className="w-4 h-4 text-primary" />
                  ) : (
                    <Building2 className="w-4 h-4 text-primary" />
                  )}
                  {service.type} Service
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  About This Service
                </h2>
                {service.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Optional Add-on */}
              {addOn && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-accent/10 border border-accent/40 rounded-2xl p-5"
                >
                  <h3 className="font-semibold text-foreground mb-2">Optional Add-on</h3>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{addOn}</span>
                  </div>
                </motion.div>
              )}

              {/* Ideal For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-muted rounded-2xl p-5"
              >
                <h3 className="font-semibold text-foreground mb-2">Ideal For</h3>
                <p className="text-muted-foreground text-sm">{service.idealFor}</p>
              </motion.div>

              {/* Why choose us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-muted rounded-3xl p-8"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Why Choose Us
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Eco-friendly products",
                    "Fully insured team",
                    "Satisfaction guarantee",
                    "Professional equipment",
                    "Flexible scheduling",
                    "Transparent pricing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 card space-y-6"
              >
                {/* Service Type */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                  {service.type === "home" ? (
                    <Home className="w-5 h-5 text-primary" />
                  ) : (
                    <Building2 className="w-5 h-5 text-primary" />
                  )}
                  <div>
                    <p className="text-xs text-muted-foreground">Service Type</p>
                    <p className="text-sm font-semibold text-foreground capitalize">
                      {service.type} Cleaning
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-2 border-t border-border">
                  <motion.a
                    href={`https://wa.me/447903599828?text=Hi,%20I'd%20like%20to%20get%20a%20quote%20for%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Quote on WhatsApp
                  </motion.a>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-outline w-full flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </motion.button>
                  </Link>
                </div>

                {/* Every Service Includes */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">
                    Every Service Includes
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Eco-friendly products",
                      "Insured professionals",
                      "Satisfaction guarantee",
                      "Free re-clean if needed",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-8">Other Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((s) => (
                  <Link key={s.id} href={`/rooms/${s.id}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 shadow-sm"
                    >
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-44 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {s.description}
                        </p>
                        <span className="text-sm text-primary flex items-center gap-1 font-medium">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      <NeedClean />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
