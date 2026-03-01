"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  name: string;
  reviewCount?: string;
  time: string;
  text: string;
  avatarColor: string;
}

const REVIEWS: Review[] = [
  {
    name: "Sanchi Hirushani",
    reviewCount: "4 reviews",
    time: "2 weeks ago",
    text: "I am extremely happy with the service provided. The team was punctual, professional, and very thorough with the cleaning. Every area was cleaned to a high standard, and they paid attention to small details as well. The communication was clear from start to finish, and the job was completed on time. I would highly recommend Peiris Cleaning Solutions to anyone looking for reliable and high-quality cleaning services.",
    avatarColor: "#DB4437",
  },
  {
    name: "Krishan Manoj",
    reviewCount: "1 review",
    time: "2 weeks ago",
    text: "Great Service",
    avatarColor: "#4285F4",
  },
  {
    name: "Chami Bob",
    reviewCount: "12 reviews",
    time: "a day ago",
    text: "I had the most amazing cleaners at my flat today. My kitchen is immaculate. Living room absolutely stunning. Thank you so much!",
    avatarColor: "#0F9D58",
  },
  {
    name: "Sumudu Senerath",
    reviewCount: "3 reviews",
    time: "a day ago",
    text: "Spotless cleaning. Very happy with the outcome. Highly recommend.",
    avatarColor: "#F4B400",
  },
  {
    name: "Niru Recht",
    time: "2 days ago",
    text: "I'm very happy with the service from Peiris Cleaning Solutions. The cleaner was punctual, professional, and did an excellent job. Everything was left spotless and well organised. Very reliable and friendly service. I highly recommend Peiris Cleaning Solutions to anyone looking for quality cleaning at a great standard.",
    avatarColor: "#9C27B0",
  },
  {
    name: "Wickrama Fernando",
    reviewCount: "5 reviews",
    time: "5 days ago",
    text: "Great job and friendly staff.",
    avatarColor: "#00ACC1",
  },
  {
    name: "Priyatha Gunasekera",
    reviewCount: "2 reviews",
    time: "a week ago",
    text: "Wonderful work team. Highly recommended and professional work. The work was above and beyond the expectations. Keep up the great work guys !!!",
    avatarColor: "#3F51B5",
  },
  {
    name: "Mayesha Dilrukshi",
    time: "4 days ago",
    text: "Amazing service! Very clean and tidy. Highly recommend.",
    avatarColor: "#E91E63",
  },
];

const DOUBLED = [...REVIEWS, ...REVIEWS];

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className="w-4 h-4"
          style={{ fill: "#FBBC04", color: "#FBBC04" }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section ref={ref} className="bg-muted/40 relative overflow-hidden">
      <style>{`
        @keyframes reviewsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-track {
          display: flex;
          align-items: stretch;
          width: max-content;
          flex-wrap: nowrap;
          animation: reviewsScroll 70s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container">
          <div className="section-header">
            <motion.span {...fadeUp(0)} className="section-badge">
              Google Reviews
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="section-title">
              What Our <span>Clients Say</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="section-description">
              Real reviews from real customers — see why London trusts Peiris Cleaning Solutions.
            </motion.p>
          </div>

          {/* Overall rating summary */}
          <motion.div
            {...fadeUp(0.25)}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-4 bg-white rounded-2xl px-7 py-5 shadow-sm border border-border">
              <GoogleLogo className="w-8 h-8 flex-shrink-0" />
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-foreground leading-none">5.0</span>
                <div>
                  <StarRow />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Based on {REVIEWS.length} Google reviews
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://share.google/FhkMVHC8t90nQcNCi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1.5"
            >
              <GoogleLogo className="w-4 h-4" />
              View all on Google
            </a>
          </motion.div>
        </div>

        {/* Infinite slider — full width, edge fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div style={{ overflow: "hidden", paddingBottom: "1.5rem", paddingTop: "0.5rem" }}>
            <div className="reviews-track">
              {DOUBLED.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border flex flex-col gap-3 hover:shadow-md transition-shadow duration-300 cursor-default"
                  style={{
                    width: "300px",
                    flexShrink: 0,
                    padding: "1.25rem",
                    marginRight: "1.25rem",
                  }}
                >
                  {/* Reviewer row */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm leading-tight truncate">
                        {review.name}
                      </p>
                      {review.reviewCount && (
                        <p className="text-xs text-muted-foreground">{review.reviewCount}</p>
                      )}
                    </div>
                    <GoogleLogo className="w-5 h-5 flex-shrink-0 opacity-60" />
                  </div>

                  {/* Stars + time */}
                  <div className="flex items-center gap-2">
                    <StarRow />
                    <span className="text-xs text-muted-foreground">{review.time}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 flex-1">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="container">
          <motion.div {...fadeUp(0.7)} className="mt-8 text-center">
            <a
              href="https://share.google/FhkMVHC8t90nQcNCi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-outline inline-flex items-center gap-2"
              >
                <Star className="w-4 h-4" style={{ fill: "#FBBC04", color: "#FBBC04" }} />
                Leave Us a Google Review
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
