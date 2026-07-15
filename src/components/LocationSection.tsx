"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const details = [
  {
    Icon: MapPin,
    label: "Location",
    content: (
      <>
        Isanti, MN<br />
        <span className="text-xs">Serving Isanti County &amp; surrounding areas</span>
      </>
    ),
  },
  {
    Icon: Clock,
    label: "Hours",
    content: "Call anytime — we mean it.",
  },
  {
    Icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:+16514200670" className="text-accent hover:underline focus:underline">
        651-420-0670
      </a>
    ),
  },
];

export function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: E }}
          >
            <h2
              className="font-heading font-bold text-text mb-12"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              Find Us
            </h2>

            <div className="space-y-7">
              {details.map(({ Icon, label, content }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text text-sm mb-1">{label}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: E, delay: 0.1 }}
            className="rounded-xl overflow-hidden border border-border w-full"
            style={{ minHeight: "320px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=45.4958,-93.2468&z=13&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="J & Co. Home Services location in Isanti, MN"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
