import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-base-border">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">Academic background.</h2>
        </Reveal>

        <div className="mt-10 relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-base-border" />
          <div className="space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.06} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1 w-5 h-5 rounded-full bg-base-bg border-2 border-accent flex items-center justify-center">
                  <GraduationCap size={11} className="text-accent" />
                </span>
                <div className="card-surface p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-base-text">{e.degree}</h3>
                    <span className="font-mono text-xs text-accent">{e.duration}</span>
                  </div>
                  <p className="text-sm text-base-muted mt-1">{e.institution}</p>
                  <span className="tag-chip mt-3 inline-block">{e.score}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
