"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import NeedClean from "@/components/NeedClean";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Clock,
  Home,
  Building2,
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "residential-cleaning",
    name: "Residential Cleaning",
    description:
      "Regular home cleaning tailored to your needs. We handle kitchens, bathrooms, living areas, and bedrooms with care. Perfect for maintaining a consistently clean home.",
    longDescription:
      "Our Residential Cleaning service is designed to keep your home fresh, tidy, and welcoming at all times. Whether you need a weekly refresh or a monthly deep tidy-up, our trained professionals bring the right tools and eco-friendly products to every job.\n\nWe pay attention to every corner — from scrubbing bathroom tiles to degreasing kitchen surfaces, dusting shelves, and mopping floors. Our team works around your schedule so your day isn't disrupted.\n\nThis service is perfect for busy families, working professionals, and anyone who wants a consistently clean home without the hassle of doing it themselves.",
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
    longDescription:
      "Our Deep Cleaning service goes far beyond a standard clean. This comprehensive service targets every hidden corner, built-up grime, and neglected surface to leave your property truly spotless.\n\nWe clean behind and underneath appliances, inside cabinets and drawers, scrub grout and tile joints, polish fixtures, and clean light fittings. Every surface is wiped, scrubbed, or sanitized using professional-grade, eco-friendly products.\n\nIdeal for seasonal refreshes, after a party, before or after moving, or simply when you want a thorough reset for your home. Our deep cleaning team is trained to handle even the most challenging spaces.",
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
    longDescription:
      "A clean office is a productive office. Our Office Cleaning service is designed for businesses that want to maintain a spotless, hygienic, and professional working environment for their staff and clients.\n\nWe clean and sanitize workstations, restrooms, common areas, kitchens, and reception spaces. All surfaces are wiped down with hospital-grade disinfectants to ensure a germ-free environment. We can schedule cleaning outside of business hours so your operations are never interrupted.\n\nFrom small offices to large corporate spaces, we tailor our service to fit your requirements and frequency — daily, weekly, or fortnightly.",
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
    longDescription:
      "Moving is stressful enough — let us handle the cleaning. Our Move-In/Out Cleaning service ensures the property is left in immaculate condition for the next occupant, or is perfectly clean for you to settle into your new space.\n\nWe cover every area of the property from top to bottom — inside ovens and fridges, inside wardrobes and cupboards, wall spot cleaning, window tracks, skirting boards, and everything in between.\n\nThis service is popular with landlords, tenants, property managers, and homeowners who want to ensure the property is returned to or received in the best possible condition. Bond cleaning requirements are met with our comprehensive checklist.",
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
    longDescription:
      "Construction and renovation work leaves behind a significant amount of dust, debris, and residue. Our Post-Construction Cleanup service is specifically designed to handle this challenging environment using industrial equipment and specialist techniques.\n\nWe remove construction dust from all surfaces, clean paint splatter, wipe down fixtures and fittings, scrub floors, clean windows inside and out, and perform a detailed final inspection to ensure every area meets our high standards.\n\nWhether it's a newly built home, a commercial renovation, or a small room refurbishment, our experienced post-construction team will have your space looking pristine and ready to move into.",
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
    longDescription:
      "Our Commercial Deep Clean is a premium-grade service built for large commercial environments such as restaurants, retail stores, warehouses, gyms, and hospitality venues. We bring industrial-grade equipment and a highly trained team to deliver results that standard cleaning simply can't match.\n\nThis service includes high-area dusting, industrial floor scrubbing and polishing, full kitchen degreasing, sanitization of all contact surfaces, waste management, and a thorough quality inspection at completion.\n\nRegular commercial deep cleans help maintain hygiene compliance, extend the life of your flooring and fixtures, and create a positive impression on customers and staff alike. We work around your operational hours to minimize disruption.",
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

export default function ServiceDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
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
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Image Gallery */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={service.images[currentImageIndex]}
            alt={service.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        {/* Navigation Arrows */}
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60 w-2"
              }`}
            />
          ))}
        </div>

        {/* Back Button */}
        <Link href="/rooms" className="absolute top-24 left-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </motion.button>
        </Link>

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-24 right-6">
            <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-14 left-0 right-0 px-6 md:px-12">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
            >
              {service.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  {service.duration}
                </div>
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Service</h2>
                {service.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why choose us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-muted rounded-3xl p-8"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h2>
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
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="text-4xl font-bold text-primary">${service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Final price based on property size</p>
                </div>

                {/* Duration & Type */}
                <div className="flex gap-3 pt-2 border-t border-border">
                  <div className="flex-1 text-center py-3 rounded-xl bg-muted">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-sm font-semibold text-foreground">{service.duration}</p>
                  </div>
                  <div className="flex-1 text-center py-3 rounded-xl bg-muted">
                    {service.type === "home" ? (
                      <Home className="w-5 h-5 text-primary mx-auto mb-1" />
                    ) : (
                      <Building2 className="w-5 h-5 text-primary mx-auto mb-1" />
                    )}
                    <p className="text-xs text-muted-foreground">Type</p>
                    <p className="text-sm font-semibold text-foreground capitalize">{service.type}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-2 border-t border-border">
                  <motion.a
                    href={`https://wa.me/94777265475?text=Hi,%20I'd%20like%20to%20get%20a%20quote%20for%20${encodeURIComponent(service.name)}`}
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

                {/* Guarantee */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">Every Service Includes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Eco-friendly products", "Insured professionals", "Satisfaction guarantee", "Free re-clean if needed"].map((item) => (
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
                      <img src={s.image} alt={s.name} className="w-full h-44 object-cover" />
                      <div className="p-5">
                        <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{s.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold">From ${s.price}</span>
                          <span className="text-sm text-primary flex items-center gap-1 font-medium">
                            View <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
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
