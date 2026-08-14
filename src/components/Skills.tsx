import Reveal from "./Reveal";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-base-border">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">What I build with.</h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="card-surface p-6 h-full hover:border-accent/50 transition-colors">
                <h3 className="font-display font-semibold text-base-text mb-1">{cat.title}</h3>
                {cat.note && <p className="text-xs text-base-muted mb-3">{cat.note}</p>}
                <div className="flex flex-wrap gap-2 mt-3">
                  {cat.skills.map((s) => (
                    <span key={s} className="tag-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
