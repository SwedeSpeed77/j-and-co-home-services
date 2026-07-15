"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LayoutGrid, Trash2, Sparkles, Leaf, PackageOpen, ShoppingBag } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const services = [
  {
    Icon: LayoutGrid,
    title: "Home Organizing",
    desc: "Turn chaos into calm. Rooms, closets, garages — anywhere clutter has taken over.",
  },
  {
    Icon: Trash2,
    title: "Junk & Garbage Removal",
    desc: "Old furniture, appliances, yard debris. We haul it away so you don't have to.",
  },
  {
    Icon: Sparkles,
    title: "Cleanup & Cleaning",
    desc: "Clutter cleared, surfaces clean. We do the dirty work.",
  },
  {
    Icon: Leaf,
    title: "Yard Work & Odd Jobs",
    desc: "Lawn care, cleanup, storm debris, snow — whatever the yard throws at you.",
  },
  {
    Icon: PackageOpen,
    title: "Hoarder Cleanouts",
    desc: "Compassionate, judgment-free cleanouts. We've seen it all and we don't judge.",
  },
  {
    Icon: ShoppingBag,
    title: "Errands & Simple Chores",
    desc: "Grocery runs, pickups, drop-offs, or simple tasks you just don't have time for.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="mb-16"
        >
          <h2
            className="font-heading font-bold text-text mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
          >
            What We Do
          </h2>
          <p className="font-body text-muted text-base md:text-lg max-w-md leading-relaxed">
            If it needs doing, we&apos;ll do it. These are our most common calls —
            but don&apos;t let the list stop you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: E, delay: i * 0.06 }}
              className="bg-bg p-8 group"
            >
              <Icon
                size={22}
                className="text-accent mb-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="font-heading font-semibold text-text text-lg mb-3">{title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
