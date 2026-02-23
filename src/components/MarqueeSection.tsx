"use client";

import React from "react";

const words = ["Cleaning", "Mopping", "Vacuum", "Sweeping"];
const doubled = [...words, ...words];

export default function MarqueeSection() {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          animation: marqueeScroll 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        style={{
          background: "transparent",
          padding: "2.25rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {doubled.map((word, i) => (
            <h2
              key={i}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                fontFamily: "var(--font-bricolage), system-ui, sans-serif",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                padding: "0 2.5rem",
                lineHeight: 1,
                letterSpacing: "0.02em",
                margin: 0,
                flexShrink: 0,
                ...(i % 2 === 0
                  ? { color: "var(--foreground)" }
                  : {
                      color: "transparent",
                      WebkitTextStroke: "2px var(--foreground)",
                    }),
              }}
            >
              {word}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
}
