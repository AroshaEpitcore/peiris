"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Clock, Home, Building2, Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: "residential-cleaning",
    name: "Residential Cleaning",
    description:
      "Regular home cleaning tailored to your needs. We handle kitchens, bathrooms, living areas, and bedrooms with care. Perfect for maintaining a consistently clean home.",
    image: "https://iili.io/fiM4hdB.jpg",
    images: [
      "https://iili.io/fiM4hdB.jpg",
      "https://iili.io/fiM4WgV.jpg",
      "https://iili.io/fiMkWAJ.jpg",
    ],
    price: 99,
    duration: "3-4 hrs",
    type: "home",
    features: ["Kitchen Deep Clean", "Bathroom Sanitization", "Dusting & Vacuuming", "Mopping Floors", "Bed Making", "Trash Removal"],
    popular: false,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    description:
      "Our thorough deep cleaning service covers every corner, removing built-up grime and leaving your space spotless. Ideal for seasonal cleaning or move-in/move-out.",
    image: "https://iili.io/fiMUhJt.jpg",
    images: [
      "https://iili.io/fiMUhJt.jpg",
      "https://iili.io/fiMUWgI.jpg",
      "https://iili.io/fiMkXwv.jpg",
    ],
    price: 249,
    duration: "5-7 hrs",
    type: "home",
    features: ["Behind Appliances", "Inside Cabinets", "Window Cleaning", "Grout & Tile Scrub", "Baseboard Cleaning", "Light Fixtures"],
    popular: true,
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    description:
      "Professional commercial cleaning for offices and workspaces. Keep your business environment fresh, hygienic, and productive for your team.",
    image: "https://iili.io/fiMkV9a.jpg",
    images: [
      "https://iili.io/fiMkV9a.jpg",
      "https://iili.io/fiM4we1.jpg",
      "https://iili.io/fiM4NmF.jpg",
    ],
    price: 199,
    duration: "4-6 hrs",
    type: "commercial",
    features: ["Desk & Surface Sanitization", "Restroom Cleaning", "Floor Care", "Trash Removal", "Kitchen/Break Room", "Window Cleaning"],
    popular: false,
  },
  {
    id: "move-in-out-cleaning",
    name: "Move-In/Out Cleaning",
    description:
      "Comprehensive cleaning for properties during tenant transitions. We ensure every surface is spotless for the next occupant or for your fresh start.",
    image: "https://iili.io/fiM4Sqv.jpg",
    images: [
      "https://iili.io/fiM4Sqv.jpg",
      "https://iili.io/fiM4U1R.jpg",
      "https://iili.io/fiM44dN.jpg",
    ],
    price: 349,
    duration: "6-8 hrs",
    type: "home",
    features: ["Full Kitchen Cleaning", "Appliance Interior", "Bathroom Deep Clean", "Closet Wipe Down", "Wall Spot Cleaning", "Window Tracks"],
    popular: true,
  },
  {
    id: "post-construction-cleanup",
    name: "Post-Construction Cleanup",
    description:
      "Specialized cleaning after renovations or construction. We remove dust, debris, and residue so your newly built or renovated space shines.",
    image: "https://iili.io/fiMkG8g.jpg",
    images: [
      "https://iili.io/fiMkG8g.jpg",
      "https://iili.io/fiM4Pet.jpg",
      "https://iili.io/fiMkNMN.jpg",
    ],
    price: 399,
    duration: "8-10 hrs",
    type: "commercial",
    features: ["Dust & Debris Removal", "Surface Polishing", "Window Cleaning", "Floor Scrubbing", "Fixture Cleaning", "Final Inspection"],
    popular: false,
  },
  {
    id: "commercial-deep-clean",
    name: "Commercial Deep Clean",
    description:
      "Premium deep cleaning for retail stores, restaurants, and large commercial spaces. We use industrial-grade equipment for exceptional results.",
    image: "https://iili.io/fiMUMfp.jpg",
    images: [
      "https://iili.io/fiMUMfp.jpg",
      "https://iili.io/fiMUwen.jpg",
      "https://iili.io/fiMUezG.jpg",
    ],
    price: 599,
    duration: "10-12 hrs",
    type: "commercial",
    features: ["Industrial Floor Care", "High-Area Dusting", "Sanitization", "Equipment Cleaning", "Waste Management", "Quality Inspection"],
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
        highlight="Services & Pricing"
        description="Choose from our range of professional cleaning services, each designed to deliver spotless results."
        backgroundImage="https://iili.io/fiMkV9a.jpg"
      />

      <section className="bg-background">
        <div className="container">
          {/* Service Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
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
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-5 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="flex items-center gap-5 mb-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {service.type === "home" ? (
                        <Home className="w-4 h-4" />
                      ) : (
                        <Building2 className="w-4 h-4" />
                      )}
                      <span className="capitalize">{service.type}</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-sm text-muted-foreground">
                        +{service.features.length - 3} more included
                      </span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">From </span>
                      <span className="text-3xl font-bold text-primary">
                        ${service.price}
                      </span>
                    </div>
                    <Link href={`/rooms/${service.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`btn flex items-center gap-2 ${
                          service.popular ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
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
              All services include eco-friendly products, professional equipment, and satisfaction guarantee
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

      <Footer />
      <ScrollToTop />
    </main>
  );
}
