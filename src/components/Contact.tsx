"use client";

import { useEffect, useState, useRef } from "react";

const links = [
  {
    label: "Email",
    value: "dzidzaimaenza@gmail.com",
    href: "mailto:dzidzaimaenza@gmail.com",
    icon: "@",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/onesmus-maenzanise-100432252",
    href: "https://www.linkedin.com/in/onesmus-maenzanise-100432252",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "github.com/oni1997",
    href: "https://github.com/oni1997",
    icon: "GH",
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-12">
<span className="text-xs font-mono text-green tracking-widest uppercase">
  {'// Contact Channel'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
            Contact
          </h2>

          <p className="text-text-secondary text-base mb-12 max-w-lg leading-relaxed">
            Available for infrastructure-focused roles and production engineering opportunities.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-panel rounded-sm p-4 glass-panel-hover flex items-center gap-4 group cursor-pointer contact-link"
                >
                  <span className="w-10 h-10 flex items-center justify-center border border-border text-xs font-mono text-text-tertiary group-hover:border-green/40 group-hover:text-green transition-all duration-300">
                    {link.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-text-tertiary tracking-wider uppercase mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm text-text-primary group-hover:text-green transition-colors duration-300 truncate">
                      {link.value}
                    </div>
                  </div>
                  <span className="text-text-tertiary text-xs group-hover:translate-x-1 transition-transform duration-300">
                    &#8599;
                  </span>
                </a>
              ))}
            </div>

            <div>
              <div className="glass-panel rounded-sm p-6">
                <div className="text-xs font-mono text-text-tertiary tracking-wider uppercase border-b border-border pb-3 mb-4">
                  Send a Signal
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormState("sending");
                    setTimeout(() => setFormState("sent"), 1200);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:border-green/40 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:border-green/40 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:border-green/40 transition-colors duration-300 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState !== "idle"}
                    className="w-full border border-green/40 text-green font-mono text-sm tracking-wider uppercase py-3 hover:bg-green/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "idle" && "Transmit Message"}
                    {formState === "sending" && "Transmitting..."}
                    {formState === "sent" && "Transmitted"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
