"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  Phone,
  Heart,
  MapPin,
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
  ],
  services: [
    { name: "Regular Home Cleaning", href: "#services" },
    { name: "Deep Cleaning", href: "#services" },
    { name: "End of Tenancy", href: "#services" },
    { name: "Office Cleaning", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/terms" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/PeirisCleaning", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/PeirisCleaning", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/PeirisCleaning", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/447903599828", label: "WhatsApp" },
];

const iconBoxStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  minWidth: "40px",
  borderRadius: "0.75rem",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.18)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/footer-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(10, 22, 40, 0.93)" }} />

      {/* Main Footer */}
      <div className="container py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 font-bold text-2xl mb-5"
            >
              <Image
                src="/images/logopng.png"
                alt="Peiris Cleaning Solutions - Professional Cleaning Services London"
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.a>
            <p className="mb-6 leading-relaxed text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
              Domestic & Office Cleaning Services.
              Trustworthy, Professional, Affordable & Local.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    whileHover={{ x: 5 }}
                    className="inline-block text-lg transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Our Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    whileHover={{ x: 5 }}
                    className="inline-block text-lg transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div style={iconBoxStyle} className="mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>
                  No 2a Chase Cross Road,<br />Romford, RM5 3PR
                </span>
              </li>
              <li>
                <a
                  href="tel:07903599828"
                  className="flex items-center gap-4 transition-colors group"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  <div style={iconBoxStyle}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span>07903 599828</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@peiriscleaningsolutions.co.uk"
                  className="flex items-center gap-4 transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  <div style={iconBoxStyle}>
                    <Mail style={{ width: "20px", height: "20px", color: "white" }} />
                  </div>
                  <span className="text-sm">Info@peiriscleaningsolutions.co.uk</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447903599828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  <div style={iconBoxStyle}>
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left" style={{ color: "rgba(255,255,255,0.5)" }}>
              &copy; {currentYear} Peiris Cleaning Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Made with{" "}
              <Heart className="w-4 h-4 text-red-400 fill-red-400 mx-1" /> for
              cleaner spaces
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
