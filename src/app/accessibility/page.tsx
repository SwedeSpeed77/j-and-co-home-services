import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | J & Co. Home Services",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-dvh px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-bold text-text mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Accessibility
        </h1>
        <p className="font-body text-muted text-sm mb-12">Last reviewed: July 2026</p>

        <div className="space-y-8 font-body text-muted leading-relaxed text-base">
          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Our Commitment</h2>
            <p>
              J &amp; Co. Home Services is committed to making this website accessible to everyone.
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">What We&apos;ve Done</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Keyboard navigation for all interactive elements</li>
              <li>Visible focus indicators throughout the site</li>
              <li>Skip-to-content link at the top of every page</li>
              <li>Color contrast meeting WCAG 2.1 AA standards</li>
              <li>Descriptive alt text on all images</li>
              <li>Semantic HTML with proper heading hierarchy</li>
              <li>Respects prefers-reduced-motion settings</li>
              <li>No horizontal scroll on any screen size</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Known Limitations</h2>
            <p>
              We are a small local business and work to continuously improve accessibility. If you
              encounter any barriers, please let us know.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Feedback</h2>
            <p>
              If you experience any accessibility issues on this site, please contact us. We take all
              feedback seriously and will respond promptly.
            </p>
            <p className="mt-3">
              <a href="tel:+16514200670" className="text-accent hover:underline">651-420-0670</a>
              <span className="mx-2 text-border">·</span>
              <a href="mailto:Swedespeedjb@gmail.com" className="text-accent hover:underline">
                Swedespeedjb@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
