import Reveal from "./Reveal";
import { howIThink } from "../data/portfolio";

export default function HowIThink() {
  return (
    <section className="py-24 border-t border-base-border bg-base-surface/40">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">How I Think</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">
            The same process, every project.
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {howIThink.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <div className="card-surface p-6 h-full relative overflow-hidden">
                <span className="font-mono text-4xl font-semibold text-base-border select-none">
                  {item.step}
                </span>
                <h3 className="font-display font-semibold text-lg mt-3">{item.title}</h3>
                <p className="text-sm text-base-muted leading-relaxed mt-2">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
