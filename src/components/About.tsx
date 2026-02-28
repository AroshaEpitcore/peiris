"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, PoundSterling, MapPin } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trustworthy",
    description: "Reliable, vetted professionals you can count on",
  },
  {
    icon: Award,
    title: "Professional",
    description: "Trained experts delivering exceptional results",
  },
  {
    icon: PoundSterling,
    title: "Affordable",
    description: "Competitive pricing without compromising quality",
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Proudly serving your local community",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  } as const;

  return (
    <section
      id="about"
      ref={ref}
      className="bg-muted leaf-pattern relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Peiris Cleaning <span>Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            We provide domestic and office cleaning services with a focus on quality,
            reliability, and customer satisfaction. Your clean space is our mission.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Peiris Cleaning Solutions delivers professional cleaning services
              for homes and offices. We take pride in our attention to detail
              and commitment to making every space spotless. Customer satisfaction
              is always our top priority.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card group"
                >
                  <div className="icon-box mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image Grid */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/images/deep-cleaning.jpg"
                    alt="Professional cleaning team"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img
                    src="/images/domestic.jpg"
                    alt="Clean office space"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4 pt-8"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img
                    src="/images/end-of-tenancy-cleaning.jpg"
                    alt="Spotless home"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/images/Office Cleaning.jpg"
                    alt="Cleaning equipment"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 card !p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">100%</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Customer</p>
                  <p className="text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
