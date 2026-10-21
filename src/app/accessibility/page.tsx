import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Accessibility | ${site.name}` };

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" updated="October 19, 2026">
      <p>
        {site.name} wants everyone to be able to use this website. We aim to meet the Web Content
        Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>
      <h2>What we have done</h2>
      <p>
        The site supports keyboard navigation, has visible focus indicators, includes a skip link,
        uses semantic headings and landmarks, keeps text at readable contrast, supports zoom and
        text resizing, and reduces motion for visitors who ask for it.
      </p>
      <h2>Known limitations</h2>
      <p>
        The embedded Google map is third-party content and may not meet every accessibility
        standard. Our service area and hours are always listed in text beside it.
      </p>
      <h2>Feedback and complaints</h2>
      <p>
        If you have trouble using any part of this site, call us at {site.phoneDisplay} (
        {site.hours}) and tell us what you ran into. We will work to fix it and to get you the
        information another way in the meantime.
      </p>
      <h2>Last reviewed</h2>
      <p>October 19, 2026.</p>
    </LegalPage>
  );
}
