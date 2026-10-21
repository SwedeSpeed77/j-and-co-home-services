"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site, contactHref, contactLabel } from "@/lib/site";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#area", label: "Service Area" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="/" className="font-heading text-2xl font-semibold tracking-tight">
          J<span className="text-gold-deep">&amp;</span>Co
          <span className="ml-3 hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted sm:inline">
            Home Solutions
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-gold-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            href={contactHref}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="inline-flex min-h-[44px] items-center bg-ink px-5 text-xs font-medium uppercase tracking-[0.16em] text-bg transition-colors duration-150 hover:bg-gold-deep"
          >
            {contactLabel}
          </motion.a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-[44px] w-[44px] items-center justify-center md:hidden"
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center font-heading text-2xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
