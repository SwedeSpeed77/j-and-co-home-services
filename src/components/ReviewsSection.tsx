"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const reviews = [
  {
    text: "Called Jacob about a garage full of junk I'd been avoiding for years. He and Jamee had it cleaned out in a few hours. Couldn't believe the difference.",
    author: "Mike T.",
    location: "Isanti, MN",
  },
  {
    text: "These two are the real deal. Helped me organize my mom's house after a move. Kind, hardworking, and reasonably priced.",
    author: "Sandra L.",
    location: "Cambridge, MN",
  },
  {
    text: "Honestly didn't know who else to call. J & Co. showed up same day and handled everything without judgment. Will call again for sure.",
    author: "Dave R.",
    location: "Isanti, MN",
  },
  {
    text: "Yard was a disaster after the storm. Jacob took care of everything. Super easy to work with.",
    author: "Kristin B.",
    location: "Braham, MN",
  },
];

export function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="mb-16"
        >
          <h2
            className="font-heading font-bold text-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
          >
            What People Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: E, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-8"
            >
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-body text-text text-base leading-relaxed mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="font-body text-sm">
                <span className="font-medium text-text">{r.author}</span>
                <span className="mx-2 text-border">·</span>
                <span className="text-muted">{r.location}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
