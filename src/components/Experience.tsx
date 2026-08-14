import Reveal from "./Reveal";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-base-border">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">Internships & hands-on work.</h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {experience.map((e, i) => (
            <Reveal key={e.company + e.duration} delay={i * 0.06}>
              <div className="card-surface p-6 h-full">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Briefcase size={16} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-base-text">{e.role}</h3>
                <p className="text-sm text-base-muted mt-1">{e.company}</p>
                <span className="font-mono text-xs text-accent mt-3 inline-block">{e.duration}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
