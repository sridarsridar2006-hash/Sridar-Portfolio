import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-base-border py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-base-muted font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="text-base-muted hover:text-accent transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-base-muted hover:text-accent transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-base-muted hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
