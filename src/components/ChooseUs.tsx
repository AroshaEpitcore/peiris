"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Clock, Leaf, ShieldCheck, ThumbsUp, ArrowRight } from "lucide-react";

const leftFeatures = [
  {
    icon: Clock,
    title: "Saves You Time",
    description:
      "We handle every inch of the clean so you can focus on what matters most — family, work, or simply relaxing.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use safe, green-certified cleaning products that protect your family, pets, and the environment.",
  },
];

const rightFeatures = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Team",
    description:
      "Every cleaner is trained, background-checked, and fully insured for your complete peace of mind.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "Not completely happy? We'll return and re-clean at absolutely no extra cost — no questions asked.",
  },
];

export default function ChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section id="choose-us" ref={ref} className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Decorative image — vacuum top-right, desktop only */}
      <img
        src="/images/vaccumpng.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-[15%] h-[65%] max-h-[500px] object-contain pointer-events-none opacity-20 z-0"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="section-badge">
            Why Choose Us
          </motion.span>
          <motion.h2 {...fadeUp(0.1)} className="section-title">
            Why Choose <span>Peiris</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="section-description">
            We go above and beyond to deliver spotless results with every visit —
            trusted by hundreds of homes and businesses across the area.
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left Features */}
          <div className="space-y-8 order-1 lg:order-1">
            {leftFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(0.2 + i * 0.15)}
                className="flex gap-5 items-start group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative order-3 lg:order-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="/images/withbg.jpeg"
                alt="Peiris Cleaning Solutions professional cleaner in London"
                className="w-full block rounded-3xl"
                style={{ display: "block", background: "none" }}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">500+ Happy Clients</p>
                    <p className="text-xs text-muted-foreground">Trusted across the region</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/15 rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/30" />
          </motion.div>

          {/* Right Features */}
          <div className="space-y-8 order-2 lg:order-3">
            {rightFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(0.35 + i * 0.15)}
                className="flex gap-5 items-start group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp(0.6)} className="mt-14 text-center">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
