export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-text text-lg mb-1">
            J <span className="text-accent">&</span> Co. Home Services
          </p>
          <p className="font-body text-muted text-sm">
            Isanti, MN &nbsp;·&nbsp;{" "}
            <a href="tel:+16514200670" className="hover:text-text transition-colors duration-200">
              651-420-0670
            </a>
          </p>
          <p className="font-body text-muted text-xs mt-3 max-w-xs leading-relaxed">
            Some content on this site was generated with AI assistance and reviewed for accuracy.
          </p>
        </div>

        <nav aria-label="Legal" className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="/privacy" className="font-body text-muted text-sm hover:text-text transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" className="font-body text-muted text-sm hover:text-text transition-colors duration-200">
            Terms of Service
          </a>
          <a href="/accessibility" className="font-body text-muted text-sm hover:text-text transition-colors duration-200">
            Accessibility
          </a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border">
        <p className="font-body text-muted text-xs">
          © {new Date().getFullYear()} J &amp; Co. Home Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
