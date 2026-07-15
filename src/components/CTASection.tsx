"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="border border-border rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle warm glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(74% 0.16 85 / 0.08), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <h2
            className="font-heading font-extrabold text-text mb-6 relative"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            Don&apos;t Know<br />Who Else to Call?
          </h2>
          <p className="font-body text-muted text-base md:text-lg max-w-sm mx-auto mb-10 leading-relaxed relative">
            Call us. We may not be able to help with everything, but we&apos;ll
            always pick up and always try.
          </p>
          <motion.a
            href="tel:+16514200670"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="inline-flex items-center gap-3 bg-accent text-bg px-10 py-5 rounded-full font-heading font-bold text-lg min-h-[56px] touch-manipulation relative"
          >
            <Phone size={18} aria-hidden="true" />
            651-420-0670
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
