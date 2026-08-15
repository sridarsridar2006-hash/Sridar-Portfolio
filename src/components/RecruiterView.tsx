import { AnimatePresence, motion } from "framer-motion";
import { FileDown, Github, Linkedin, Mail, Users, X } from "lucide-react";
import { useState } from "react";
import {
  certifications,
  education,
  profile,
  projects,
  skillCategories,
} from "../data/portfolio";
import { useProfilePhoto } from "../hooks/useProfilePhoto";

const topSkills = skillCategories.slice(0, 3).flatMap((c) => c.skills.slice(0, 3));
const topProjects = projects.slice(0, 2);
const primaryEducation = education[0];

export default function RecruiterView() {
  const [open, setOpen] = useState(false);
  const { photoUrl } = useProfilePhoto();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-accent text-white px-5 py-3 text-sm font-medium shadow-lg shadow-accent/20 hover:bg-accent/90 transition-colors"
      >
        <Users size={16} />
        Recruiter View
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Recruiter summary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full sm:max-w-md max-h-[90vh] overflow-y-auto thin-scroll card-surface sm:rounded-2xl rounded-t-2xl p-7"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close recruiter view"
                className="absolute right-5 top-5 text-base-muted hover:text-base-text"
              >
                <X size={20} />
              </button>

              <p className="eyebrow mb-3">30-Second Summary</p>

              {/* Profile Header with Circle Shape Photo */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-base-border">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-accent to-accent-teal shrink-0 shadow-md">
                  <img
                    src={photoUrl}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover bg-base-surface"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold text-base-text">{profile.name}</h2>
                  <p className="text-accent text-xs mt-0.5 font-medium">{profile.headline}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-base-muted uppercase tracking-wide mb-2">
                  Top Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topSkills.map((s) => (
                    <span key={s} className="tag-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-mono text-base-muted uppercase tracking-wide mb-2">
                  Top Projects
                </h3>
                <ul className="space-y-2">
                  {topProjects.map((p) => (
                    <li key={p.id} className="text-sm text-base-text">
                      <span className="text-accent">▸</span> {p.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-mono text-base-muted uppercase tracking-wide mb-2">
                  Education
                </h3>
                <p className="text-sm text-base-text">{primaryEducation.degree}</p>
                <p className="text-sm text-base-muted">
                  {primaryEducation.institution} · {primaryEducation.score}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-mono text-base-muted uppercase tracking-wide mb-2">
                  Achievements
                </h3>
                <p className="text-sm text-base-muted">
                  {certifications.length} certifications / conference participations
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn-primary">
                  <FileDown size={15} />
                  Resume
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Github size={15} />
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a href={`mailto:${profile.email}`} className="btn-secondary">
                  <Mail size={15} />
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
