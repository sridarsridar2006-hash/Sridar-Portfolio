import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, FileDown } from "lucide-react";
import { nav, profile } from "../data/portfolio";
import { useProfilePhoto } from "../hooks/useProfilePhoto";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { photoUrl } = useProfilePhoto();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
        scrolled ? "bg-base-bg/90 backdrop-blur border-b border-base-border" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5 font-mono text-sm font-semibold text-base-text group">
          {/* Circular avatar badge in navbar */}
          <div className="w-8 h-8 rounded-full p-[1px] bg-gradient-to-tr from-accent to-accent-teal overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src={photoUrl}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover bg-base-surface"
            />
          </div>
          <span>
            <span className="text-accent">&lt;</span>
            {profile.initials}
            <span className="text-accent">/&gt;</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-base-muted hover:text-base-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-base-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-base-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn-secondary">
            <FileDown size={15} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-base-text"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-base-border bg-base-bg">
          <div className="section-shell py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-base-muted hover:text-base-text"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-base-border">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-base-muted">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-base-muted">
                <Linkedin size={18} />
              </a>
              <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn-secondary ml-auto">
                <FileDown size={15} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
