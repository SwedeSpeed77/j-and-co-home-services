"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : ""
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-heading font-bold text-xl tracking-tight text-text">
          J <span className="text-accent">&</span> Co.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-muted hover:text-text transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href="tel:+16514200670"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded-full text-sm font-heading font-semibold touch-manipulation min-h-[44px]"
          >
            <Phone size={14} aria-hidden="true" />
            651-420-0670
          </motion.a>
        </div>

        <motion.button
          className="md:hidden text-text min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12, ease: E }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: E }}
            className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-6"
          >
            <div className="flex flex-col gap-1 pt-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-text transition-colors duration-200 font-body text-base min-h-[44px] flex items-center"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+16514200670"
                className="flex items-center justify-center gap-2 bg-accent text-bg px-4 py-3 rounded-full font-heading font-semibold min-h-[44px] touch-manipulation mt-3"
              >
                <Phone size={16} aria-hidden="true" />
                651-420-0670
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
