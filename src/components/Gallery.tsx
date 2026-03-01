"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
  // Domestic / House Cleaning
  {
    src: "/images/galleryhouse.jpeg",
    alt: "Domestic house cleaning service in London by Peiris Cleaning Solutions",
    category: "domestic",
  },
  {
    src: "/images/galleryhouse2.png",
    alt: "Professional home cleaning in London - spotless results",
    category: "domestic",
  },
  {
    src: "/images/galleryhouse3.png",
    alt: "Regular domestic cleaning service London",
    category: "domestic",
  },
  {
    src: "/images/galleryhouse4.png",
    alt: "Home cleaning by Peiris Cleaning Solutions London",
    category: "domestic",
  },
  // Deep Cleaning
  {
    src: "/images/gallerydeep.png",
    alt: "Professional deep cleaning service in London",
    category: "deep",
  },
  {
    src: "/images/gallerydeep2.png",
    alt: "Intensive deep clean by Peiris Cleaning Solutions London",
    category: "deep",
  },
  // End of Tenancy Cleaning
  {
    src: "/images/galleryTenancy.png",
    alt: "End of tenancy cleaning in London - move out clean",
    category: "tenancy",
  },
  {
    src: "/images/galleryTenancy2.png",
    alt: "Professional end of tenancy cleaning London",
    category: "tenancy",
  },
  {
    src: "/images/galleryTenancy3.png",
    alt: "Move in move out cleaning service London",
    category: "tenancy",
  },
  // Office Cleaning
  {
    src: "/images/galleryoffice.png",
    alt: "Professional office cleaning service in London",
    category: "office",
  },
  {
    src: "/images/galleryoffice2.png",
    alt: "Commercial office cleaning London by Peiris Cleaning Solutions",
    category: "office",
  },
  {
    src: "/images/galleryoffice3.png",
    alt: "Workplace cleaning service London",
    category: "office",
  },
];

const categories = ["all", "domestic", "deep", "tenancy", "office"];

const categoryLabels: Record<string, string> = {
  all: "All",
  domestic: "Domestic",
  deep: "Deep Cleaning",
  tenancy: "End of Tenancy",
  office: "Office",
};

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
              className={`btn ${
                activeCategory === category
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {categoryLabels[category]}
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
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
