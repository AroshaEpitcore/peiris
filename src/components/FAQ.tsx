"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
  bg?: string; // tailwind bg class e.g. "bg-background" or "bg-muted/40"
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section ref={ref} className={`${bg} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

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

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                {...fadeUp(0.15 + i * 0.06)}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span className="font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primary group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary group-hover:text-white" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
