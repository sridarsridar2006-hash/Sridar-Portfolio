import Reveal from "./Reveal";
import { certifications, education, profile, projects, skillCategories } from "../data/portfolio";

const techCount = new Set(skillCategories.flatMap((c) => c.skills)).size;
const cgpaEntry = education.find((e) => e.score.toLowerCase().includes("cgpa"));

const stats = [
  { label: "Projects Built", value: String(projects.length) },
  { label: "Technologies", value: `${techCount}+` },
  { label: "Certifications", value: String(certifications.length) },
  { label: "Academic Standing", value: cgpaEntry ? cgpaEntry.score : "—" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-base-border">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">
            Grounded in fundamentals, building toward backend engineering.
          </h2>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-12">
          <Reveal delay={0.05} className="lg:col-span-3">
            <p className="text-base-muted leading-relaxed text-[15px]">
              {profile.summary}
            </p>
            <p className="text-base-muted leading-relaxed text-[15px] mt-4">
              Across three machine learning projects — a predictive daily assistant, an NLP-based
              toxicity detector, and a real-time computer-vision system for disaster response — the
              throughline is the same: take a messy, real-world problem, structure the data, and ship
              a working system around it. That same instinct now extends into data analytics and
              full-stack builds like a house-price prediction model and a blood-bank management
              platform.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-surface p-5">
                  <div className="text-2xl font-display font-semibold text-accent">{s.value}</div>
                  <div className="text-xs text-base-muted mt-1 font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
