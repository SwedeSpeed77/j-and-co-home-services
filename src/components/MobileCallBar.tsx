import { site, contactHref } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={contactHref}
        className="flex min-h-[52px] items-center justify-center bg-gold text-sm font-medium uppercase tracking-[0.16em] text-ink active:scale-[0.97] transition-transform duration-100"
      >
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
