import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
            What we do
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            Five ways we give you your space back.
          </h2>
        </Reveal>

        <ol className="mt-16 border-t border-gold">
          {site.services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.04}>
                <div className="group grid gap-3 border-b border-line py-8 transition-colors duration-150 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-8 md:py-10">
                  <span className="font-heading text-2xl text-gold-deep tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-3xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="max-w-lg text-muted">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
