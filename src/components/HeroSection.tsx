"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraBackground } from "@/components/AuroraBackground";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const TICKER = [
  "Home Organizing",
  "Junk Removal",
  "Yard Work",
  "Errands",
  "Hoarder Cleanouts",
  "Cleaning",
  "Odd Jobs",
  "Whatever You Need",
];

function SplitReveal({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ overflow: "hidden", display: "inline-block", verticalAlign: "bottom" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "115%", rotateZ: char === " " ? 0 : 7, opacity: 0 }}
            animate={{ y: "0%", rotateZ: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.23, 1, 0.32, 1],
              delay: delay + i * 0.038,
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!bgRef.current || !sectionRef.current) return;

    const tween = gsap.to(bgRef.current, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const onMagnetMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMagnet({
      x: (e.clientX - rect.left - rect.width / 2) * 0.35,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };

  const doubled = [...TICKER, ...TICKER];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Aurora canvas background */}
      <AuroraBackground
        className="absolute inset-0 z-0"
        variant="ember"
        speed={0.45}
        blobCount={6}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(8% 0.015 150) 0%, oklch(8% 0.015 150 / 0.88) 38%, oklch(8% 0.015 150 / 0.35) 72%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <motion.p
            className="font-body text-accent text-xs font-semibold tracking-[0.22em] uppercase mb-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: E, delay: 0.1 }}
          >
            Isanti, MN &nbsp;·&nbsp; Jacob & Jamee
          </motion.p>

          <h1
            className="font-heading font-extrabold text-text mb-7"
            style={{
              fontSize: "clamp(3.4rem, 12vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
            }}
          >
            <SplitReveal text="Anything." delay={0.18} />
            <br />
            <SplitReveal text="Anytime." className="text-accent" delay={0.52} />
          </h1>

          <motion.p
            className="font-body text-muted text-base md:text-lg max-w-[28rem] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: E, delay: 1.05 }}
          >
            Whatever you need. We may not be able to help with everything —
            but we&apos;d love to try.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: E, delay: 1.2 }}
          >
            {/* Magnetic CTA */}
            <motion.a
              href="tel:+16514200670"
              onMouseMove={onMagnetMove}
              onMouseLeave={() => setMagnet({ x: 0, y: 0 })}
              animate={{ x: magnet.x, y: magnet.y }}
              transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.6 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-bg px-8 py-4 rounded-full font-heading font-bold text-base min-h-[52px] touch-manipulation"
            >
              <Phone size={16} aria-hidden="true" />
              Call 651-420-0670
            </motion.a>

            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="inline-flex items-center justify-center border border-border text-muted hover:text-text hover:border-muted px-8 py-4 rounded-full font-heading font-semibold text-base min-h-[52px] touch-manipulation transition-colors duration-200"
            >
              See What We Do
            </motion.a>
          </motion.div>
        </div>

        {/* Scrolling ticker */}
        <motion.div
          className="border-t border-border/40 py-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          aria-hidden="true"
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animationName: "marquee",
              animationDuration: "24s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                className="font-heading text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-muted whitespace-nowrap px-6"
              >
                {item}
                <span className="text-accent ml-6">·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
