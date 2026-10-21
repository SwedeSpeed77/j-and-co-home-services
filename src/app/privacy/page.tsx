import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Privacy Policy | ${site.name}` };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 19, 2026">
      <p>
        {site.name} (&ldquo;we&rdquo;) operates this website to share information about our home
        services in {site.area}. This policy explains what happens to information when you visit.
      </p>
      <h2>What we collect</h2>
      <p>
        This site has no contact form, no accounts, and no analytics or advertising trackers. We do
        not ask you to enter personal information here. If you call us, we only use what you tell
        us to schedule and complete your job.
      </p>
      <h2>Hosting and third parties</h2>
      <p>
        Our host, Vercel, may automatically log technical information such as your IP address and
        browser type to deliver and secure the site. The map in our Service Area section is provided
        by Google, which may collect information when that map loads under its own privacy policy.
      </p>
      <h2>Cookies</h2>
      <p>We do not set advertising or analytics cookies.</p>
      <h2>How long we keep information</h2>
      <p>
        We do not store personal information collected through this website. Information you share
        by phone is kept only as long as needed to provide our services and meet our records needs.
      </p>
      <h2>Your rights</h2>
      <p>
        You may ask what personal information we hold about you, ask us to correct or delete it, or
        opt out of any sharing, as allowed by applicable law.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, call us at {site.phoneDisplay} ({site.hours}).
      </p>
      <h2>Changes</h2>
      <p>If this policy changes, we will update the date at the top of this page.</p>
    </LegalPage>
  );
}
