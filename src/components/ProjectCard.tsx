import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/portfolio";

type Props = {
  project: Project;
  onOpen: (id: string) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-surface group relative flex flex-col overflow-hidden"
    >
      <button
        onClick={() => onOpen(project.id)}
        className="text-left flex flex-col flex-1 p-6"
        aria-label={`View case study for ${project.title}`}
      >
        <div className="flex items-center justify-between">
          <span className="tag-chip text-accent border-accent/40">{project.category}</span>
          <ArrowUpRight
            size={18}
            className="text-base-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <h3 className="mt-4 font-display font-semibold text-lg text-base-text leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-base-muted leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag-chip">+{project.technologies.length - 4}</span>
          )}
        </div>
      </button>

      <div className="flex items-center justify-between border-t border-base-border px-6 py-3">
        <button
          onClick={() => onOpen(project.id)}
          className="text-xs font-mono text-accent hover:underline"
        >
          View case study
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`GitHub repository for ${project.title}`}
          className="text-base-muted hover:text-accent transition-colors"
        >
          <Github size={16} />
        </a>
      </div>
    </motion.div>
  );
}
