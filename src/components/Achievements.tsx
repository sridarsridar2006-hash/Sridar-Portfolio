import Reveal from "./Reveal";
import { Award } from "lucide-react";
import { certifications, education, experience, projects } from "../data/portfolio";

const cgpa = education.find((e) => e.score.toLowerCase().includes("cgpa"));

const proof = [
  { label: "Projects Shipped", value: String(projects.length) },
  { label: "Internships Completed", value: String(experience.length) },
  { label: "Certifications & Conferences", value: String(certifications.length) },
  { label: "CGPA", value: cgpa ? cgpa.score.replace("CGPA: ", "") : "—" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 border-t border-base-border bg-base-surface/40">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">Proof of practice.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {proof.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.05}>
              <div className="card-surface p-5 text-center h-full flex flex-col justify-center">
                <div className="text-2xl font-display font-semibold text-accent">{p.value}</div>
                <div className="text-xs text-base-muted mt-1 font-mono">{p.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <h3 className="eyebrow mb-4">Certifications & Conferences</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="card-surface p-5 flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-base-text leading-snug">{c.name}</p>
                  {c.issuer && <p className="text-xs text-base-muted mt-1 font-mono">{c.issuer}</p>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
