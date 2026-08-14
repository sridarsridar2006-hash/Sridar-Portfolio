import { useState, type FormEvent } from "react";
import { CheckCircle2, FileDown, Github, Linkedin, Mail, Send } from "lucide-react";
import Reveal from "./Reveal";
import { contactConfig, profile } from "../data/portfolio";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (contactConfig.formspreeEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(contactConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // No backend configured yet — fall back to a pre-filled mailto link
    // instead of pretending the message was sent.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-base-border">
      <div className="section-shell grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">Let's talk.</h2>
          <p className="mt-4 text-base-muted text-[15px] leading-relaxed">
            Open to entry-level backend, data analytics, and software development roles, and
            internships. Reach out directly or send a message.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-base-text hover:text-accent transition-colors"
            >
              <Mail size={16} className="text-accent" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-base-text hover:text-accent transition-colors"
            >
              <Linkedin size={16} className="text-accent" />
              LinkedIn Profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-base-text hover:text-accent transition-colors"
            >
              <Github size={16} className="text-accent" />
              GitHub Profile
            </a>
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-base-text hover:text-accent transition-colors"
            >
              <FileDown size={16} className="text-accent" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-base-muted">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-lg bg-base-surface border border-base-border px-4 py-2.5 text-sm text-base-text focus-visible:outline-accent"
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-mono text-base-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-lg bg-base-surface border border-base-border px-4 py-2.5 text-sm text-base-text focus-visible:outline-accent"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono text-base-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-lg bg-base-surface border border-base-border px-4 py-2.5 text-sm text-base-text focus-visible:outline-accent resize-none"
                placeholder="What would you like to discuss?"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={15} /> Message sent — thank you.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email {profile.email} directly.
              </p>
            )}
            {!contactConfig.formspreeEndpoint && (
              <p className="text-xs text-base-muted">
                This form currently opens your email client. Connect Formspree or EmailJS in{" "}
                <code className="font-mono">src/data/portfolio.ts</code> to send messages directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
