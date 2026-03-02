"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Clock,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "07903 599828",
    href: "tel:07903599828",
    color: "bg-blue-500",
    description: "Call us for a free quote",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Info@peiriscleaningsolutions.co.uk",
    href: "mailto:Info@peiriscleaningsolutions.co.uk",
    color: "bg-primary",
    description: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "07903 599828",
    href: "https://wa.me/447903599828",
    color: "bg-green-500",
    description: "Quick response via WhatsApp",
  },
];

export default function HomeContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const lines = [
      `Hi, I'd like to request a free cleaning quote.`,
      ``,
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Service: ${form.service || "—"}`,
      `Message: ${form.message || "—"}`,
    ];
    window.open(
      `https://wa.me/447903599828?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="contact" ref={ref} className="bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      {/* Cleaning girl image */}
      <motion.img
        src="/images/contact.png"
        alt="Peiris Cleaning Solutions professional cleaner ready to help in London"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="hidden lg:block absolute bottom-0 right-0 h-52 object-contain z-10 pointer-events-none"
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-badge"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Message for a <span>Free Quote!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Ready for a spotless space? Contact Peiris Cleaning Solutions
            for a free consultation and quote.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 md:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Contact Us
            </h3>

            <div className="space-y-3 sm:space-y-5 mb-6 sm:mb-8">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card p-4! sm:p-5! flex items-center gap-3 sm:gap-5 group"
                >
                  <div
                    className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}
                  >
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-lg">{method.title}</p>
                    <p className="text-primary font-medium text-xs sm:text-sm truncate">{method.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                      {method.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box w-10! h-10!">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Office Hours</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Sunday</span>
                  <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            id="contact-form"
            className="relative order-1 md:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
              Request a Free Quote
            </h3>

            <motion.div variants={itemVariants} className="card">
              <h4 className="font-semibold text-foreground mb-5 flex items-center gap-3 text-lg">
                <div className="icon-box w-10! h-10!">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                Send Us a Message
              </h4>
              <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="input"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={form.phone}
                  onChange={handleChange}
                />
                <select
                  name="service"
                  className="input"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="Regular Home Cleaning">Regular Home Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
                  <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your cleaning needs..."
                  rows={4}
                  className="input resize-none"
                  value={form.message}
                  onChange={handleChange}
                />
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsApp}
                  className="btn btn-primary w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </motion.button>
                <p className="text-center text-sm text-muted-foreground">
                  Or call us directly at{" "}
                  <a href="tel:07903599828" className="text-primary font-semibold hover:underline">
                    07903 599828
                  </a>
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
