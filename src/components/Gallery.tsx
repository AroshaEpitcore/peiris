"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
  // Exterior images
  {
    src: "https://iili.io/fiMUhJt.jpg",
    alt: "Residential cleaning",
    category: "residential",
  },
  {
    src: "https://iili.io/fiMUWgI.jpg",
    alt: "Home deep clean",
    category: "residential",
  },
  {
    src: "https://iili.io/fiMkXwv.jpg",
    alt: "Kitchen cleaning",
    category: "residential",
  },
  {
    src: "https://iili.io/fiMUMfp.jpg",
    alt: "Living area cleaning",
    category: "residential",
  },
  {
    src: "https://iili.io/fiMUwen.jpg",
    alt: "Outdoor cleaning",
    category: "residential",
  },
  {
    src: "https://iili.io/fiMUezG.jpg",
    alt: "Patio cleaning",
    category: "residential",
  },
  // Commercial images
  {
    src: "https://iili.io/fiM4hdB.jpg",
    alt: "Office cleaning",
    category: "commercial",
  },
  {
    src: "https://iili.io/fiM4WgV.jpg",
    alt: "Workspace cleaning",
    category: "commercial",
  },
  {
    src: "https://iili.io/fiMkWAJ.jpg",
    alt: "Conference room cleaning",
    category: "commercial",
  },
  {
    src: "https://iili.io/fiMkV9a.jpg",
    alt: "Lobby cleaning",
    category: "commercial",
  },
  {
    src: "https://iili.io/fiM4we1.jpg",
    alt: "Break room cleaning",
    category: "commercial",
  },
  {
    src: "https://iili.io/fiM4NmF.jpg",
    alt: "Commercial kitchen cleaning",
    category: "commercial",
  },
  // Specialized images
  {
    src: "https://iili.io/fiM4U1R.jpg",
    alt: "Deep cleaning service",
    category: "specialized",
  },
  {
    src: "https://iili.io/fiM4Pet.jpg",
    alt: "Post-construction cleanup",
    category: "specialized",
  },
  {
    src: "https://iili.io/fiMkG8g.jpg",
    alt: "Move-in/out cleaning",
    category: "specialized",
  },
  {
    src: "https://iili.io/fiMkNMN.jpg",
    alt: "Event cleanup",
    category: "specialized",
  },
];

const categories = ["all", "residential", "commercial", "specialized"];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" ref={ref} className="bg-muted leaf-pattern relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Our <span>Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            See the results of our professional cleaning services and the
            spaces we&apos;ve transformed.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`btn capitalize ${
                activeCategory === category
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div
                  className={`${
                    index === 0 ? "h-[400px] md:h-full" : "h-[200px] md:h-[250px]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
