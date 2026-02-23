"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Clock, Home, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    name: "Regular Home Cleaning",
    description:
      "Keep your home consistently clean and fresh. We handle kitchens, bathrooms, living areas, and bedrooms with care and attention to detail.",
    images: [
      "https://iili.io/fiM4hdB.jpg",
      "https://iili.io/fiM4WgV.jpg",
      "https://iili.io/fiMkWAJ.jpg",
    ],
    duration: "2-4 hrs",
    type: "home",
    features: ["Kitchen Cleaning", "Bathroom Sanitisation", "Dusting & Vacuuming", "Mopping Floors"],
    popular: false,
  },
  {
    name: "Deep Cleaning",
    description:
      "Thorough deep cleaning covering every corner, removing built-up grime and leaving your space sparkling clean.",
    images: [
      "https://iili.io/fiMUhJt.jpg",
      "https://iili.io/fiMUWgI.jpg",
      "https://iili.io/fiMkXwv.jpg",
    ],
    duration: "4-6 hrs",
    type: "home",
    features: ["Behind Appliances", "Inside Cabinets", "Window Cleaning", "Grout & Tile Scrub"],
    popular: true,
  },
  {
    name: "End of Tenancy Cleaning",
    description:
      "Comprehensive cleaning for move-in or move-out. We ensure every surface is spotless to help you get your deposit back.",
    images: [
      "https://iili.io/fiMkV9a.jpg",
      "https://iili.io/fiM4we1.jpg",
      "https://iili.io/fiM4NmF.jpg",
    ],
    duration: "5-8 hrs",
    type: "home",
    features: ["Full Property Clean", "Oven & Hob Cleaning", "Carpet Cleaning", "Window Tracks"],
    popular: true,
  },
  {
    name: "Office & Commercial Cleaning",
    description:
      "Professional cleaning for offices, shops, and commercial spaces. Keep your business environment fresh and productive.",
    images: [
      "https://iili.io/fiM4Sqv.jpg",
      "https://iili.io/fiM4U1R.jpg",
      "https://iili.io/fiM44dN.jpg",
    ],
    duration: "3-6 hrs",
    type: "commercial",
    features: ["Desk & Surface Sanitisation", "Restroom Cleaning", "Floor Care", "Waste Removal"],
    popular: false,
  },
];

// Image Carousel Component
function ImageCarousel({ images, serviceName }: { images: string[]; serviceName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
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

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-56 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${serviceName} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

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
              onClick={(e) => goToSlide(e, index)}
              className={`h-2 rounded-full transition-all duration-200 shadow-sm ${
                index === currentIndex
                  ? "bg-white w-5"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Rooms() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  } as const;

  return (
    <section id="services" ref={ref} className="bg-background relative">
      <div className="container">
        {/* Section Header */}
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
            Choose from our range of professional domestic and commercial cleaning services,
            each designed to deliver spotless results.
          </motion.p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                service.popular
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-2 rounded-full bg-accent text-primary-dark text-sm font-semibold">
                    Popular
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
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {service.type === "home" ? (
                      <Home className="w-4 h-4" />
                    ) : (
                      <Building2 className="w-4 h-4" />
                    )}
                    <span className="capitalize">{service.type}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn w-full text-center text-sm ${
                    service.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  Get a Free Quote
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg mb-4">
            Customer satisfaction is our top priority! All services include professional equipment and trained staff.
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
      </div>
    </section>
  );
}
