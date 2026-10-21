"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center px-7 text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-150";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-ink hover:text-bg"
      : "border border-ink/25 text-ink hover:border-gold-deep hover:text-gold-deep";
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12, ease: E }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
