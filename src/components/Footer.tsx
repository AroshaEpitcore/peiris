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
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 text-primary font-bold text-2xl mb-5"
            >
              <Image
                src="/images/logopng.png"
                alt="Peiris Cleaning Solutions - Professional Cleaning Services London"
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.a>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
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
                  className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block text-lg"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-lg">Our Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block text-lg"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-lg">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="icon-box !w-10 !h-10 mt-0.5 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>No 2a Chase Cross Road,<br />Romford, RM5 3PR</span>
              </li>
              <li>
                <a
                  href="tel:07903599828"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="icon-box !w-10 !h-10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>07903 599828</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@peiriscleaningsolutions.co.uk"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="icon-box !w-10 !h-10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">Info@peiriscleaningsolutions.co.uk</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447903599828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="icon-box !w-10 !h-10">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Peiris Cleaning Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" /> for
              cleaner spaces
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
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
