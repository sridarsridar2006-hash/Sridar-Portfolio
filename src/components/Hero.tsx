import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-grid bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-base-muted text-sm mb-6 font-mono"
        >
          <MapPin size={14} className="text-accent" />
          {profile.location}
          <span className="inline-block w-2 h-4 bg-accent/80 ml-1 animate-blink" aria-hidden />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-xl sm:text-2xl text-accent font-display max-w-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg text-base-muted max-w-2xl leading-relaxed"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View My Projects
            <ArrowRight size={16} />
          </a>
          <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn-secondary">
            <FileDown size={16} />
            Download Resume
          </a>

          <div className="flex items-center gap-3 ml-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-base-border text-base-muted hover:text-accent hover:border-accent/60 transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-base-border text-base-muted hover:text-accent hover:border-accent/60 transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
