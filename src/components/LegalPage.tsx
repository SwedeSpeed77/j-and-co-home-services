import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <a href="/" className="text-sm uppercase tracking-[0.16em] text-gold-deep hover:underline">
        &larr; Back to home
      </a>
      <h1 className="mt-8 font-heading text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-10 space-y-5 text-muted [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-ink">
        {children}
      </div>
    </article>
  );
}
