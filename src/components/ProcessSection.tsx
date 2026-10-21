import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Call us",
    body: "Tell us what you are facing. No job is too big, too small or too messy to ask about.",
  },
  {
    title: "Get a straight answer",
    body: "We look at the job, tell you what it involves, and give you an honest quote before we start.",
  },
  {
    title: "We handle it",
    body: "We do the work, clean up after ourselves, and leave your space ready to enjoy.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-surface px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-gold-deep">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-7xl">
            Three steps. No surprises.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={0.06 * i}>
                <span className="font-heading text-7xl font-medium italic leading-none text-gold tabular-nums">
                  {i + 1}
                </span>
                <div className="gold-rule mt-4 w-full" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 max-w-sm text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
