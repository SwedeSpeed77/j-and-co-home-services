import { Reveal } from "./Reveal";
import { site, contactHref } from "@/lib/site";

export function LocationSection() {
  const { lat, lng } = site.map;
  return (
    <section id="area" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
            Service area
          </p>
          <h2 className="mt-4 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            Based in Isanti, MN.
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Proudly serving {site.area}.
          </p>

          <dl className="mt-10 border-t border-gold">
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-5">
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
                Hours
              </dt>
              <dd>{site.hours}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-5">
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
                Phone
              </dt>
              <dd>
                <a
                  href={contactHref}
                  className="inline-flex min-h-[44px] items-center font-heading text-2xl font-semibold transition-colors duration-150 hover:text-gold-deep"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line p-2">
            <iframe
              title="Map of the J&Co Home Solutions service area around Isanti, Minnesota"
              src={`https://maps.google.com/maps?q=${lat},${lng}&z=11&output=embed`}
              className="h-[360px] w-full sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
