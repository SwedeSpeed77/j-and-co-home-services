import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | J & Co. Home Services",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh px-6 py-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-bold text-text mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Privacy Policy
        </h1>
        <p className="font-body text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-8 font-body text-muted leading-relaxed text-base">
          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">What We Collect</h2>
            <p>
              When you contact us via phone or any contact form on this site, we may collect your name,
              phone number, email address, and details about your service request. We also collect
              standard analytics data (pages visited, time on site, device type) through our analytics
              provider.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">How We Use It</h2>
            <p>
              We use your information solely to respond to your service requests and communicate with
              you about your job. Analytics data helps us understand how people find and use our site
              so we can improve it.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Who We Share It With</h2>
            <p>
              We do not sell your personal information. We may share it with analytics providers
              (e.g., Google Analytics) and any email or scheduling tools we use to manage requests.
              These providers are bound by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">How Long We Keep It</h2>
            <p>
              Contact information is retained for as long as needed to complete your service and
              maintain business records. You may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete personal information we hold about you.
              To make a request, contact us at{" "}
              <a href="tel:+16514200670" className="text-accent hover:underline">651-420-0670</a>{" "}
              or{" "}
              <a href="mailto:Swedespeedjb@gmail.com" className="text-accent hover:underline">
                Swedespeedjb@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">Cookies</h2>
            <p>
              We use cookies to support analytics. You can opt out via the cookie banner on your first
              visit. Declining cookies does not affect your ability to use this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-text text-lg mb-3">AI Disclosure</h2>
            <p>
              Some content on this website was created with AI assistance and reviewed by the business
              owner for accuracy.
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
