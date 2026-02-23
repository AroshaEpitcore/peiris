"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { PhoneCall, ListChecks, CalendarCheck, ArrowRight } from "lucide-react";

const PROCESS_LINE =
  "https://pixydrops.com/brote/main-html/assets/images/shapes/process-line.png";
const PROCESS_ICON_SHAPE =
  "https://pixydrops.com/brote/main-html/assets/images/shapes/process-icon-shape.png";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Get a Free Quote",
    description:
      "Reach out by phone or form. Tell us about your space and we'll provide a tailored, no-obligation quote right away.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Choose Your Service",
    description:
      "Pick from our domestic, commercial, or deep cleaning packages — fully customisable to suit your schedule and budget.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book Your Clean",
    description:
      "Select a date and time that works for you. Our team arrives on time, fully equipped and ready to deliver a spotless result.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--muted)" }}>
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="section-badge">
            Simple 3 Steps
          </motion.span>
          <motion.h2 {...fadeUp(0.1)} className="section-title">
            Easy &amp; Quick — <span>Here's How It Works</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="section-description">
            Getting your home or office spotless has never been simpler. Follow
            three easy steps and let us handle the rest.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">

          {/* Process line image — desktop only, sits behind icons */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: "-10px",
              left: "calc(16.7% + 68px)",
              right: "calc(16.7% + 68px)",
              zIndex: -1,
            }}
          >
            <img
              src={PROCESS_LINE}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...fadeUp(0.2 + i * 0.15)}
              className="relative flex flex-col items-center text-center group z-10"
            >
              {/* Icon box */}
              <div className="relative mb-7">
                {/* Outer ring */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    inset: "-10px",
                    border: "2px solid rgba(26, 82, 118, 0.15)",
                    borderRadius: "50%",
                  }}
                />

                {/* Main icon circle — z-index: 1 creates stacking context so child z:-1 goes behind the background */}
                <div
                  className="relative w-36 h-36 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 8px 32px rgba(26, 82, 118, 0.3)",
                    zIndex: 1,
                  }}
                >
                  {/* Decorative shape — z:-1 places it behind the circle background, matching original template */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: "5px",
                      zIndex: -1,
                      backgroundImage: `url(${PROCESS_ICON_SHAPE})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />

                  {/* Icon renders as normal flex child above the background */}
                  <step.icon className="w-14 h-14 text-white transition-all duration-500 group-hover:scale-90" />
                </div>

                {/* Step number badge */}
                <div
                  className="absolute -top-1 -left-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold z-20"
                  style={{
                    background: "var(--accent)",
                    color: "var(--foreground)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.65)} className="mt-14 text-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Book a Clean Today
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
