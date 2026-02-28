"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Users, Leaf, Zap, Wrench, ArrowUpRight, Phone } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experience Staff",
    description: "Professional and experienced staff ready to help you anytime.",
  },
  {
    icon: Leaf,
    title: "Natural Products",
    description: "We only use natural products — no harmful chemicals used.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Set your schedule and get regular, faster cleaning every day.",
  },
  {
    icon: Wrench,
    title: "Best Equipment",
    description: "We use the best world-class equipment for every clean.",
  },
];

export default function HomeAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section id="home-about" ref={ref} className="bg-white relative overflow-hidden py-24">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            {/* Cap text */}
            <motion.p
              {...fadeUp(0)}
              style={{ color: "#00C2FF", letterSpacing: "1.8px" }}
              className="text-sm font-medium uppercase pb-2"
            >
              About Peiris Cleaning
            </motion.p>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.1)}
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight pb-8"
            >
              Let Us Handle The Mess,{" "}
              <span className="text-primary">You Enjoy The Clean</span>
            </motion.h2>

            {/* Description */}
            <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg leading-relaxed">
              Peiris Cleaning Solutions delivers professional domestic and office cleaning
              with a focus on quality, reliability, and customer satisfaction. Our trained
              team brings the right tools, techniques, and care to every job — leaving your
              space spotless and fresh every single time.
            </motion.p>

            {/* Feature Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mt-[30px] pt-[30px]"
              style={{ borderTop: "2px solid #F5F6F7" }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  {...fadeUp(0.3 + i * 0.1)}
                  className="about-box-main"
                >
                  <div className="about-svg-main">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold leading-[30px] pb-2">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-6">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Row: Button + Phone */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-wrap items-center gap-5 mt-[60px]"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  About Us
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <a
                href="tel:07903599828"
                className="flex items-center gap-3 group"
                style={{ border: "2px solid #00C2FF", borderRadius: "50px", padding: "8px 16px 8px 8px" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#00C2FF" }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Need Help Now?</p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#000" }}
                  >
                    07903 599828
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center mt-10 lg:mt-[60px]"
          >
            {/* Main image */}
            <img
              src="/images/withbg.jpeg"
              alt="Peiris Cleaning Solutions"
              className="w-full max-w-md rounded-full"
            />

            {/* Circular floating image 2 — top */}
            <div className="hidden lg:block">
              <img
                src="/images/domestic.jpg"
                alt="Domestic cleaning"
                className="about-img2"
              />
            </div>

            {/* Circular floating image 3 — bottom */}
            <div className="hidden lg:block">
              <img
                src="/images/deep-cleaning.jpg"
                alt="Deep cleaning"
                className="about-img3"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
