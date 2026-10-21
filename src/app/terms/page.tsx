import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Terms of Service | ${site.name}` };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="October 19, 2026">
      <p>
        These terms apply to everyone who uses this website, operated by {site.name} in Isanti,
        Minnesota.
      </p>
      <h2>About the website</h2>
      <p>
        This site provides general information about our cleaning, organizing, junk removal, yard
        work, cleanout and errand services. Nothing here is a binding offer or quote.
      </p>
      <h2>Services and payment</h2>
      <p>
        Services are arranged by phone. We will describe the work and give you a price before we
        begin. Payment terms are agreed with you directly for each job.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        We work to keep this site accurate and available, but it is provided as is. To the extent
        allowed by law, we are not liable for losses arising from use of the website.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Minnesota.</p>
      <h2>Disputes</h2>
      <p>
        If something goes wrong, please call us first so we can try to make it right. Any dispute
        that cannot be resolved will be handled in the courts of Minnesota.
      </p>
      <h2>Contact</h2>
      <p>
        {site.phoneDisplay}, {site.hours}.
      </p>
    </LegalPage>
  );
}
