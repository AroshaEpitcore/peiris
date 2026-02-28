"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "/images/person-taking-care.jpg", alt: "Professional window cleaning", cols: "col-span-2" },
  { src: "/images/deep-cleaning.jpg",       alt: "Deep cleaning service",        cols: "col-span-1" },
  { src: "/images/domestic.jpg",            alt: "Domestic cleaning",            cols: "col-span-1" },
  { src: "/images/end-of-tenancy-cleaning.jpg", alt: "End of tenancy cleaning",  cols: "col-span-1" },
  { src: "/images/Office Cleaning.jpg",     alt: "Office cleaning",              cols: "col-span-1" },
];

export default function ExpandImg() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.0, 1.08]);

  return (
    <div ref={ref} style={{ overflow: "hidden", lineHeight: 0, width: "100%" }}>
      <motion.div style={{ scale, transformOrigin: "center center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "4px",
            height: "520px",
          }}
        >
          {/* Main wide image — spans 2 columns */}
          <div style={{ gridColumn: "span 2", overflow: "hidden" }}>
            <img
              src={images[0].src}
              alt={images[0].alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Top-right: 2 images stacked */}
          <div style={{ display: "grid", gridColumn: "span 2", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
            {images.slice(1, 3).map((img) => (
              <div key={img.src} style={{ overflow: "hidden", height: "258px" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
            {images.slice(3, 5).map((img) => (
              <div key={img.src} style={{ overflow: "hidden", height: "258px" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
