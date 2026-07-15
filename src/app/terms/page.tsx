import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | J & Co. Home Services",
};

export default function TermsPage() {
  return (
    <div className="min-h-dvh px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-bold text-text mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Terms of Service
        </h1>
        <p className="font-body text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-8 font-body text-muted leading-relaxed text-base">
          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Who These Terms Apply To</h2>
            <p>
              These terms apply to anyone who contacts J &amp; Co. Home Services or uses this website.
              By requesting services, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Our Services</h2>
            <p>
              J &amp; Co. Home Services provides home organizing, junk removal, cleaning, yard work,
              hoarder cleanouts, and general odd jobs in Isanti, MN and surrounding areas. Specific
              scope of work is agreed upon before each job begins.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Payment</h2>
            <p>
              Pricing is discussed and agreed upon before work begins. Payment is due upon completion
              unless otherwise arranged in writing. We reserve the right to decline jobs at our
              discretion.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Limitation of Liability</h2>
            <p>
              J &amp; Co. Home Services is not liable for pre-existing damage, items of undisclosed
              value, or losses arising from circumstances outside our control. Our liability is limited
              to the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Governing Law</h2>
            <p>These terms are governed by the laws of the State of Minnesota.</p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Disputes</h2>
            <p>
              Any disputes should first be brought to our attention directly. We&apos;re a small local
              business and will do our best to make things right.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Contact</h2>
            <p>
              J &amp; Co. Home Services — Isanti, MN<br />
              <a href="tel:+16514200670" className="text-accent hover:underline">651-420-0670</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
