"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, ArrowRight, Home, Building2 } from "lucide-react";

const services = [
  {
    id: "domestic-cleaning",
    name: "Domestic Cleaning",
    description: "Regular or occasional cleaning to keep homes clean, tidy, and hygienic.",
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
    description: "A more detailed and intensive clean than regular domestic cleaning.",
    images: [
      "/images/deep-cleaning.jpg",
      "/images/deep-cleaning2.jpg",
      "/images/deep-cleaning3.jpg",
    ],
    type: "home",
    features: [
      "All domestic cleaning tasks",
      "Deep cleaning of kitchen (inside cupboards)",
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
      "Removal of dust and dirt throughout",
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

const N = services.length;

// Auto-scrolling image carousel inside each card
function CardImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} cleaning service in London - image ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center block transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      {/* Dot indicators */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-4" : "bg-white/50 w-1.5"
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const singleSetWidth = useRef(0);
  const initialized = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const tripled = [...services, ...services, ...services];

  const measureAndInit = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length < N + 1) return;
    singleSetWidth.current = children[N].offsetLeft - children[0].offsetLeft;
    if (!initialized.current) {
      el.scrollLeft = singleSetWidth.current;
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(measureAndInit, 50);
    window.addEventListener("resize", measureAndInit);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measureAndInit);
    };
  }, [measureAndInit]);

  const scroll = useCallback((dir: "next" | "prev") => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length < 2) return;
    const step = children[1].offsetLeft - children[0].offsetLeft;
    const sw = singleSetWidth.current;
    if (dir === "next" && sw > 0 && el.scrollLeft + step >= sw * 2) {
      el.scrollLeft -= sw;
    } else if (dir === "prev" && sw > 0 && el.scrollLeft - step < 0) {
      el.scrollLeft += sw;
    }
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const el = trackRef.current;
      if (!el) return;
      const sw = singleSetWidth.current;
      if (sw === 0) return;
      if (el.scrollLeft >= sw * 2) {
        el.scrollLeft -= sw;
      } else if (el.scrollLeft < sw * 0.25) {
        el.scrollLeft += sw;
      }
    }, 100);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-background relative">
      {/* Section Header */}
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Our <span>Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Choose from our range of professional domestic and commercial cleaning
            services, each designed to deliver spotless results.
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel — full-width */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("prev")}
          aria-label="Previous service"
          className="absolute left-2 sm:left-4 top-[42%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="carousel-track flex gap-6 overflow-x-auto py-4 px-14 sm:px-20"
        >
          {tripled.map((service, i) => (
            <div
              key={`${service.id}-${i}`}
              className="flex-none w-[82vw] sm:w-[320px] md:w-[360px] lg:w-[380px]"
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div
                  className={`relative bg-card rounded-3xl overflow-hidden shadow-md border-2 h-full flex flex-col transition-all duration-300 ${
                    service.popular
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/30 hover:shadow-xl"
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-accent text-primary-dark text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Auto-scrolling image carousel */}
                  <div className="relative flex-none">
                    <CardImageCarousel images={service.images} name={service.name} />
                    <div className="absolute bottom-3 left-3 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {service.type === "home" ? (
                          <Home className="w-4 h-4 text-white" />
                        ) : (
                          <Building2 className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pt-3 pb-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4 flex-1">
                      {service.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-xs">{f}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <p className="text-xs text-muted-foreground pl-5">
                          +{service.features.length - 4} more included
                        </p>
                      )}
                    </div>

                    {/* Ideal For */}
                    <div className="text-xs bg-muted rounded-xl px-3 py-2 mb-4">
                      <span className="font-medium text-foreground">Ideal for: </span>
                      <span className="text-muted-foreground">{service.idealFor}</span>
                    </div>

                    {/* CTA */}
                    <div
                      className={`btn w-full text-sm flex items-center justify-center gap-2 ${
                        service.popular ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("next")}
          aria-label="Next service"
          className="absolute right-2 sm:right-4 top-[42%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="container mt-8 text-center"
      >
        <p className="text-muted-foreground text-lg mb-4">
          Customer satisfaction is our top priority! All services include professional
          equipment and trained staff.
        </p>
        <motion.a
          href="tel:07903599828"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
        >
          Call 07903 599828 for a free quote
        </motion.a>
      </motion.div>
    </section>
  );
}
