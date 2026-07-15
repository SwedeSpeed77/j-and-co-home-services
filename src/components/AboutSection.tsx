"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MapPin } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const stats = [
  { value: "Any Job", label: "No matter how big or small" },
  { value: "Same Day", label: "We move fast when you need it" },
  { value: "No Judgment", label: "Seen everything, judged nothing" },
  { value: "Just Call", label: "We'll figure the rest out together" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: E }}
          >
            <h2
              className="font-heading font-bold text-text mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              We&apos;re Jacob<br />&amp; Jamee.
            </h2>
            <div className="space-y-5 font-body text-muted leading-relaxed">
              <p>
                We started J &amp; Co. because we genuinely love helping people.
                We&apos;re your neighbors here in Isanti — and when someone needs a
                hand, we want to be the first call.
              </p>
              <p>
                We don&apos;t care what the job is. Hoarder cleanout, grocery run,
                messy garage, overgrown yard — bring it. We may not always have
                all the answers, but we&apos;ll always show up and give it everything
                we&apos;ve got.
              </p>
              <p className="text-text font-medium">
                No judgment. No hassle. Just two people who want to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={15} className="text-accent" aria-hidden="true" />
                </div>
                <span className="font-body text-muted text-sm">Locally owned &amp; operated</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-accent" aria-hidden="true" />
                </div>
                <span className="font-body text-muted text-sm">Serving Isanti &amp; surrounding areas</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: E, delay: 0.15 + i * 0.07 }}
                className="bg-bg border border-border rounded-xl p-6"
              >
                <p className="font-heading font-bold text-accent text-xl mb-1.5">{stat.value}</p>
                <p className="font-body text-muted text-xs leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
