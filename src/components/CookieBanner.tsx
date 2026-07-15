"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function CookieBanner() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(localStorage.getItem("cookie-consent") === null);
  }, []);

  const respond = (val: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", val);
    setShown(false);
  };

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: E }}
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="false"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[1000] bg-surface border border-border rounded-xl p-5"
          style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
        >
          <p className="font-body text-muted text-sm mb-4">
            We use cookies for analytics.{" "}
            <a href="/privacy" className="text-accent underline">
              Learn more
            </a>
            .
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => respond("accepted")}
              className="flex-1 bg-accent text-bg py-2.5 px-4 rounded-full font-heading font-semibold text-sm min-h-[44px] touch-manipulation"
            >
              Accept
            </button>
            <button
              onClick={() => respond("declined")}
              className="flex-1 border border-border text-muted py-2.5 px-4 rounded-full font-heading font-semibold text-sm min-h-[44px] touch-manipulation hover:text-text hover:border-muted transition-colors duration-200"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
