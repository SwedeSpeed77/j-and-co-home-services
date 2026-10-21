"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./Button";
import { contactHref, contactLabel, site } from "@/lib/site";

const E: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function HeroSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: E, delay },
  });

  return (
    <section className="relative flex min-h-dvh flex-col justify-between overflow-hidden px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
      {/* oversized monogram, typographic only */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-6 select-none font-heading text-[18rem] font-semibold leading-none text-gold/15 sm:text-[28rem] lg:text-[38rem]"
      >
        J&amp;Co
      </span>

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: E }}
          style={{ transformOrigin: "left" }}
          className="gold-rule mb-6 w-full"
        />
        <motion.p
          {...rise(0.1)}
          className="flex flex-wrap items-center justify-between gap-x-6 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep"
        >
          <span>Family-run &middot; Isanti County, Minnesota</span>
          <span className="hidden sm:inline">Cleaning &middot; Organizing &middot; Cleanouts &middot; Yard</span>
        </motion.p>
      </div>

      <div className="relative mx-auto w-full max-w-7xl py-16">
        <h1 className="font-heading font-semibold tracking-[-0.03em]">
          <motion.span
            {...rise(0.2)}
            className="block text-[3.6rem] leading-[0.9] sm:text-[6.5rem] lg:text-[9rem] xl:text-[10.5rem]"
          >
            A cleaner home.
          </motion.span>
          <motion.span
            {...rise(0.32)}
            className="block text-[3.6rem] italic leading-[0.9] text-gold-deep sm:ml-[8vw] sm:text-[6.5rem] lg:text-[9rem] xl:text-[10.5rem]"
          >
            A calmer life.
          </motion.span>
        </h1>
      </div>

      <motion.div
        {...rise(0.5)}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-md text-lg text-muted">
          Careful, discreet home care for {site.area}. We clear it, clean it and set it right,
          then leave it better than we found it.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={contactHref}>{contactLabel}</Button>
          <Button href="/#services" variant="ghost">
            Our services
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
