"use client";

import { useEffect, useState, useRef } from "react";

const principles = [
  {
    statement: "Systems must fail safely, not silently.",
    detail:
      "A failure you know about is a failure you can respond to. Silent failures cascade into outages. Every component should degrade gracefully and report its state.",
  },
  {
    statement: "Observability is not optional.",
    detail:
      "You cannot fix what you cannot see. Metrics, logs, and traces are not luxuries—they are the control panels of production systems. If it isn't observable, it isn't ready for production.",
  },
  {
    statement: "Complexity must be controlled, not eliminated blindly.",
    detail:
      "Distributed systems are inherently complex. The goal is not zero complexity but managed complexity—clear boundaries, well-defined interfaces, and deliberate trade-offs.",
  },
  {
    statement: "Production is the only real environment.",
    detail:
      "Staging and development are useful approximations, but production is where the actual system behavior emerges. Real load, real data, real failure modes. Design for production first.",
  },
  {
    statement: "Reliability is a feature, not an afterthought.",
    detail:
      "Every architectural decision has reliability implications. Redundancy, retry logic, circuit breakers, and backpressure are not optional add-ons—they are core design requirements.",
  },
];

export default function Philosophy() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
      id="philosophy"
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
<span className="text-xs font-mono text-blue tracking-widest uppercase">
  {'// Engineering Doctrine'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-16 leading-tight">
            How I Think About Systems
          </h2>

          <div className="space-y-8">
            {principles.map((p, i) => (
                <div
                  key={p.statement}
                  className={`glass-panel rounded-sm p-6 transition-all duration-700 delay-${i * 100} philosophy-item ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-serif text-green/40 font-bold leading-none mt-0.5 philosophy-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-text-primary mb-2 font-sans">
                      {p.statement}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
