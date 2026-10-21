import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { site, contactHref, contactLabel } from "@/lib/site";

export function CTASection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-5 py-24 text-bg sm:px-8 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="h-px w-24 bg-gold" aria-hidden="true" />
          <h2 className="mt-8 max-w-5xl font-heading text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[6rem] lg:text-[8rem]">
            Don&rsquo;t know who <span className="italic text-gold">else</span> to call?
          </h2>
          <p className="mt-8 max-w-lg text-lg text-bg/75">
            Call us. We will listen, tell you honestly whether we can help, and take it from
            there. {site.hours}.
          </p>
          <div className="mt-10">
            <Button href={contactHref}>{contactLabel}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
