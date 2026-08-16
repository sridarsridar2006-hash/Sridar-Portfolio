import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import { useProfilePhoto } from "../hooks/useProfilePhoto";

export default function Hero() {
  const { photoUrl } = useProfilePhoto();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="section-shell relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Main Hero Text Details */}
          <div className="flex-1 w-full text-left">
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

          {/* Circle Shape Profile Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center shrink-0"
          >
            {/* Outer Circular Gradient Frame */}
            <div className="relative group">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-tr from-accent via-accent-teal to-blue-500 shadow-2xl shadow-accent/20 group-hover:shadow-accent/40 group-hover:scale-[1.02] transition-all duration-300">
                {/* Inner Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-base-surface relative border-4 border-base-bg">
                  <img
                    src={photoUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Status Badge Tag */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-base-card border border-base-border shadow-lg flex items-center gap-2 text-xs font-mono text-base-muted">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span>Full Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
