"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpandImg() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.0, 1.12]);

  return (
    <div
      ref={ref}
      style={{ overflow: "hidden", lineHeight: 0, width: "100%" }}
    >
      <motion.div style={{ scale, transformOrigin: "center center" }}>
        <img
          src="https://up2client.com/envato/home-rakshak/cleaning/html/assets/images/expand-img/person-taking-care.jpg"
          alt="Professional cleaning service"
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>
    </div>
  );
}
