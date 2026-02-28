"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Why Us", href: "/amenities" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full transition-all duration-300 bg-card/90 backdrop-blur-lg shadow-lg border border-border text-foreground w-[calc(100%-2rem)] sm:w-[calc(100%-6rem)] max-w-5xl"
      >
        <div className="flex items-center justify-between w-full px-2">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-2 py-1 rounded-full font-bold transition-colors cursor-pointer"
            >
              <Image
                src="/images/logopng.png"
                alt="Peiris Cleaning Solutions Logo - Professional Cleaning Services London"
                width={52}
                height={52}
                className="object-contain"
              />
              <span className="hidden sm:inline text-sm font-bold text-primary">

              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Items — centered */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer text-foreground/80 hover:text-primary hover:bg-primary/10 ${
                    pathname === item.href ? "!bg-primary/20 !text-primary" : ""
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right: Get Quote + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-1">
            {/* Get Quote Button */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex px-6 py-2 rounded-full bg-accent text-primary-dark text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap shadow-md cursor-pointer"
              >
                Get Quote
              </motion.div>
            </Link>

            {/* Theme Toggle — hidden for now */}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-colors hover:bg-primary/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 text-foreground`} />
              ) : (
                <Menu className={`w-5 h-5 text-foreground`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-card/95 backdrop-blur-lg rounded-2xl shadow-xl border border-border p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium cursor-pointer ${
                      pathname === item.href ? "bg-primary/10 text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="px-4 py-3 rounded-xl bg-accent text-primary-dark text-center font-semibold hover:bg-accent/90 transition-colors mt-2 cursor-pointer"
                >
                  Get Quote
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
