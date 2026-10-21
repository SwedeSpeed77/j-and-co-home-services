import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const pillars = [
  { title: "Any job", body: "If it is a home, a yard or a hard day, bring it to us." },
  { title: "No judgment", body: "Every home has a story. We are here to help, not to comment." },
  { title: "Just call", body: "One phone call gets you a real person and a straight answer." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
            About us
          </p>
          <h2 className="mt-4 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            We&rsquo;re {site.owners}.
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="font-heading text-2xl leading-snug sm:text-3xl">
              J&amp;Co started with a simple idea: neighbors helping neighbors. We are a locally
              owned and operated family business serving {site.area}.
            </p>
            <p className="mt-6 max-w-xl text-muted">
              We work in the homes and yards of the people around us, so we do every job the way
              we would want it done for our own family. Honest about what we can do, careful with
              your space, and gone only when it is right.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-0 border-t border-gold sm:grid-cols-3">
            {pillars.map((p, i) => (
              <li key={p.title} className="border-b border-line py-6 sm:border-b-0 sm:py-8 sm:pr-6">
                <Reveal delay={0.05 * i}>
                  <h3 className="font-heading text-2xl font-semibold text-gold-deep">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
