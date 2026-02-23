"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
  Users,
  Leaf,
  CheckCircle,
  ThumbsUp,
  Zap,
  Heart,
  BadgeCheck,
  Recycle,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Complete coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Punctual and reliable, every single time",
  },
  {
    icon: Sparkles,
    title: "Spotless Results",
    description: "Meticulous cleaning that meets the highest standards",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Skilled, background-checked cleaning experts",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted by hundreds of homes and businesses",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe for your family, pets, and the environment",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll re-clean at no extra cost",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Pricing",
    description: "No hidden fees, upfront quotes every time",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Same-day and next-day service available",
  },
  {
    icon: Heart,
    title: "Personalized Plans",
    description: "Custom cleaning plans tailored to your needs",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Regular quality checks and inspections",
  },
  {
    icon: Recycle,
    title: "Sustainable Practices",
    description: "Reducing waste with responsible cleaning methods",
  },
];

export default function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  } as const;

  return (
    <section id="amenities" ref={ref} className="bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            The Peiris <span>Difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            We go above and beyond to deliver cleaning services that set the
            standard for quality and professionalism.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card group"
            >
              <div className="icon-box mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://iili.io/fiM4U1R.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Experience the Clean Difference
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              From the first consultation, our dedicated team ensures every
              surface, corner, and detail meets our exacting standards.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary font-semibold hover:bg-white/90"
            >
              Get a Free Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
