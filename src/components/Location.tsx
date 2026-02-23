"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Plane, Car, Train } from "lucide-react";

const distances = [
  {
    icon: Plane,
    place: "Bandaranaike Airport",
    distance: "2.5 hours",
    description: "International airport connections",
  },
  {
    icon: Train,
    place: "Galle Railway Station",
    distance: "10 minutes",
    description: "Scenic coastal rail route",
  },
  {
    icon: Car,
    place: "Galle Fort",
    distance: "15 minutes",
    description: "UNESCO World Heritage Site",
  },
  {
    icon: MapPin,
    place: "Unawatuna Beach",
    distance: "20 minutes",
    description: "Famous beach destination",
  },
];

const serviceAreas = [
  "Galle City - 15 min drive",
  "Unawatuna - 20 min drive",
  "Hikkaduwa - 35 min drive",
  "Koggala - 25 min drive",
  "Ahangama - 30 min drive",
  "Habaraduwa - 20 min drive",
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" ref={ref} className="bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Location & <span>Map</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Conveniently located to serve homes and businesses across the
            Galle district and surrounding areas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5234567890123!2d80.2167!3d6.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDInMDAuMCJOIDgwwrAxMycwMC4wIkU!5e0!3m2!1sen!2slk!4v1635186714461!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-6 right-6 card !p-6"
            >
              <div className="flex items-start gap-4">
                <div className="icon-box flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-lg">
                    Peiris Cleaning Solution
                  </h3>
                  <p className="text-muted-foreground">
                    14A, Maddawatta
                    <br />
                    Galle, Sri Lanka
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info */}
          <div className="space-y-8 lg:pt-0 pt-12">
            {/* Distance Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="icon-box !w-10 !h-10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                Getting Here
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {distances.map((item, index) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="card !p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-box !w-10 !h-10 !rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.place}
                        </p>
                        <p className="text-primary font-semibold text-lg">
                          {item.distance}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Nearby Attractions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Service Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceAreas.map((attraction, index) => (
                  <motion.div
                    key={attraction}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://maps.app.goo.gl/bZM5uXNRxMoWgms59?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Get Directions
              </motion.a>
              <motion.a
                href="https://wa.me/94777265475?text=Hi,%20I%20need%20cleaning%20service%20from%20Peiris%20Cleaning%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
