"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  bg?: string;
}

export default function FAQ({
  faqs,
  badge = "FAQ",
  title = "Frequently Asked",
  titleHighlight = "Questions",
  description = "Everything you need to know about our cleaning services.",
  bg = "bg-background",
}: FAQProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section ref={ref} className={`${bg} relative overflow-hidden`}>
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="section-badge">
            {badge}
          </motion.span>
          <motion.h2 {...fadeUp(0.1)} className="section-title">
            {title} <span>{titleHighlight}</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="section-description">
            {description}
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left — sticky info panel */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-2 lg:sticky lg:top-32 space-y-6"
          >
            {/* Highlight card */}
            <div className="rounded-3xl overflow-hidden border border-primary/20 bg-primary/5 p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Can't find what you're looking for? Our team is happy to help — reach us via WhatsApp or phone any day of the week.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/447903599828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:07903599828"
                  className="btn btn-outline w-full text-sm"
                >
                  Call 07903 599828
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "5.0★", label: "Google Rating" },
                { value: "7 Days", label: "Available" },
                { value: "24h", label: "Response Time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-4 text-center"
                >
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.25 + i * 0.07)}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 bg-card shadow-lg shadow-primary/5"
                      : "border-border bg-card hover:border-primary/20 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    {/* Number badge */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 font-semibold text-base leading-snug transition-colors duration-200 ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        {/* Coloured left-border accent */}
                        <div className="mx-6 mb-5 pl-4 border-l-2 border-primary/40">
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
