"use client";

import { useEffect, useState, useRef } from "react";

const specs = [
  { label: "Environment", value: "Production Systems" },
  { label: "Domain", value: "Fintech / Telecom" },
  { label: "Scale", value: "High-volume production systems" },
  { label: "Reliability Focus", value: "Observability, Fault Tolerance, RCA" },
  { label: "Compliance", value: "PCI DSS, Secure Design" },
];

export default function SystemProfile() {
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
      id="profile"
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
  {'// System Profile'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
            Production Systems Overview
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-base">
                I operate in live production environments not isolated development sandboxes.
                My work centers on maintaining reliability, observability, and fault handling
                across distributed systems that process hundreds of thousands of transactions daily.
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                I specialize in stabilizing real-world systems under load, managing cross-organization
                integrations, and ensuring that every component from API gateways to database clusters
                performs predictably at scale.
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                My approach combines disciplined software engineering with infrastructure
                operations, treating production environments as the single source of truth.
              </p>
            </div>

            <div className="glass-panel rounded-sm p-6 space-y-4">
              <div className="text-xs font-mono text-text-tertiary tracking-wider uppercase border-b border-border pb-3">
                System Specifications
              </div>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start gap-4"
                  >
                    <span className="text-blue text-sm mt-0.5">&#9656;</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono text-text-tertiary tracking-wider uppercase mb-0.5">
                        {spec.label}
                      </div>
                      <div className="text-sm text-text-primary">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}