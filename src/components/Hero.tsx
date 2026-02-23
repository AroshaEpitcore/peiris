"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown, Shield, Star, Users, Phone } from "lucide-react";

const heroImages = [
  "https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo2/wp-content/uploads/sites/6/2021/08/slide-1.jpg",
  "https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo2/wp-content/uploads/sites/6/2021/08/slide-2.jpg",
  "https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo2/wp-content/uploads/sites/6/2025/06/slide-3.jpg",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        gsap.to(parallaxRef.current, {
          y: scrolled * 0.5,
          duration: 0.1,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, [mounted]);

  const stats = [
    { icon: Star, value: "4.9", label: "Client Rating" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Shield, value: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="!py-0 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Crossfade Animation */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${heroImages[currentImageIndex]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient -z-5" />

      {/* Floating Bubbles Animation */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                y: -100,
                x: `+=${Math.random() * 200 - 100}`,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="container text-center text-white relative z-10 py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-animate mb-8"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20">
            Domestic & Office Cleaning Services
          </span>
        </motion.div>

        <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block">Peiris Cleaning</span>
          <span className="block text-accent mt-2">Solutions</span>
        </h1>

        <p className="hero-animate text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          Trustworthy &bull; Professional &bull; Affordable &bull; Local
        </p>

        <p className="hero-animate text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Message for a Free Quote! Customer satisfaction is our top priority.
        </p>

        <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="tel:07903599828"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-accent text-primary-dark font-semibold text-lg hover:bg-accent/90 shadow-lg px-10 py-4"
          >
            <Phone className="w-5 h-5" />
            07903 599828
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white/10 backdrop-blur-sm border border-white/30 font-semibold text-lg hover:bg-white/20 px-10 py-4"
          >
            Get a Free Quote
          </motion.a>
        </div>

        {/* Stats */}
        <div className="hero-animate flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
