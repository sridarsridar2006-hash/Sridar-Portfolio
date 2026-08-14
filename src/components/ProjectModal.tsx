import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../data/portfolio";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto thin-scroll card-surface sm:rounded-2xl rounded-t-2xl p-6 sm:p-9"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 text-base-muted hover:text-base-text"
            >
              <X size={20} />
            </button>

            <span className="tag-chip text-accent border-accent/40">{project.category}</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-semibold leading-snug pr-8">
              {project.title}
            </h2>
            <p className="mt-2 text-base-muted">{project.tagline}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <Github size={15} />
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>

            <div className="mt-9 grid sm:grid-cols-2 gap-8">
              <section>
                <h3 className="eyebrow mb-2">Problem</h3>
                <p className="text-sm text-base-muted leading-relaxed">{project.problem}</p>
              </section>
              <section>
                <h3 className="eyebrow mb-2">Solution</h3>
                <p className="text-sm text-base-muted leading-relaxed">{project.solution}</p>
              </section>
            </div>

            <section className="mt-8">
              <h3 className="eyebrow mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="eyebrow mb-4">Workflow</h3>
              <div className="flex flex-wrap items-center gap-2">
                {project.workflow.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="font-mono text-xs rounded-md border border-base-border bg-base-surface px-3 py-1.5 text-base-text">
                      {step}
                    </span>
                    {i < project.workflow.length - 1 && (
                      <ArrowRight size={13} className="text-base-muted shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <section>
                <h3 className="eyebrow mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-base-muted flex gap-2">
                      <span className="text-accent mt-1">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="eyebrow mb-3">Why This Project Matters</h3>
                <ul className="space-y-2">
                  {project.demonstrates.map((d) => (
                    <li key={d} className="text-sm text-base-muted flex gap-2">
                      <span className="text-accent mt-1">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-8 rounded-lg border border-base-border bg-base-surface p-4">
              <h3 className="eyebrow mb-1">Evaluation</h3>
              <p className="text-sm text-base-muted">{project.metricNote}</p>
            </section>

            <section className="mt-8">
              <h3 className="eyebrow mb-2">Future Improvements</h3>
              <p className="text-sm text-base-muted leading-relaxed">
                Next iterations would focus on expanding test coverage, deploying the system to a
                live environment, and gathering real usage data to validate performance beyond the
                development dataset.
              </p>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
