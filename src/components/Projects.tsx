import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="py-24 border-t border-base-border">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">Featured Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-2xl">
            Projects that show the work, not just the topic.
          </h2>
          <p className="mt-3 text-base-muted max-w-2xl text-[15px]">
            Each card opens into a full case study — the problem, the approach, and what it
            demonstrates.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <ProjectCard project={p} onOpen={setActiveId} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
