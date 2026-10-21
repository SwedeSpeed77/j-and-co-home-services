import { site, contactHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-5 pb-28 pt-14 sm:px-8 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-heading text-3xl font-semibold">
            J<span className="text-gold-deep">&amp;</span>Co
          </p>
          <p className="mt-2 text-sm text-muted">
            {site.name}. Locally owned and operated in Isanti, MN.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
            Contact
          </p>
          <a
            href={contactHref}
            className="mt-3 inline-flex min-h-[44px] items-center font-heading text-2xl font-semibold hover:text-gold-deep"
          >
            {site.phoneDisplay}
          </a>
          <p className="text-muted">{site.hours}</p>
        </div>
        <nav aria-label="Legal" className="text-sm">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
            Legal
          </p>
          <ul className="mt-3">
            {[
              ["/privacy", "Privacy Policy"],
              ["/terms", "Terms of Service"],
              ["/accessibility", "Accessibility"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-[44px] items-center text-muted hover:text-gold-deep"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-line pt-6 text-xs text-muted">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
