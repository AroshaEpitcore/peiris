"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NeedClean() {
  return (
    <section id="need-clean" className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/need-backgroundimage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-base uppercase tracking-widest mb-4"
          >
            Need a Deep Clean?
          </motion.h6>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8"
          >
            Experience the Best Cleaning Service Today!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href={`https://wa.me/447903599828?text=${encodeURIComponent("Hi, I came across Peiris Cleaning Solutions and I'm interested in booking a cleaning service. Could you please provide me with a free quote? I look forward to hearing from you. Thank you!")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Send Us a Message
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
