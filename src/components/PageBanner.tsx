"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageBannerProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  backgroundImage?: string;
}

export default function PageBanner({
  badge,
  title,
  highlight,
  description,
  backgroundImage = "/images/herobanner.jpg",
}: PageBannerProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient -z-5" />

      {/* Content */}
      <div className="container text-center text-white relative z-10 py-32">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {title} <span className="text-accent">{highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
