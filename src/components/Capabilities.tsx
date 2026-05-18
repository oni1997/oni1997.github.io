"use client";

import { useEffect, useState, useRef } from "react";

interface Module {
  title: string;
  description: string;
  items: string[];
  accent: "green" | "blue" | "amber";
}

const modules: Module[] = [
  {
    title: "Cloud & Infrastructure Module",
    description: "AWS Lambda, containerized workloads, cloud hosting environments.",
    accent: "green",
    items: [
      "AWS Lambda - serverless compute",
      "Docker / Kubernetes - container orchestration",
      "Cloud hosting - multi-environment deployments",
    ],
  },
  {
    title: "DevOps Module",
    description: "CI/CD pipelines, deployment automation, infrastructure troubleshooting.",
    accent: "blue",
    items: [
      "CI/CD pipelines - automated build & deploy",
      "Deployment automation - zero-downtime releases",
      "Infrastructure troubleshooting - root cause analysis",
    ],
  },
  {
    title: "Backend Systems Module",
    description: "Golang, Python, Node.js, Java - REST, GraphQL, integration systems.",
    accent: "amber",
    items: [
      "Golang / Python / Node.js / Java - polyglot engineering",
      "REST / GraphQL APIs - service interfaces",
      "Integration systems - cross-platform connectivity",
    ],
  },
  {
    title: "Data Systems Module",
    description: "PostgreSQL, MySQL, MongoDB - performance tuning, data pipelines.",
    accent: "blue",
    items: [
      "PostgreSQL / MySQL / MongoDB - relational & document stores",
      "Performance tuning - query optimization, indexing",
      "Data pipelines - ETL, streaming, batch processing",
    ],
  },
  {
    title: "Security Module",
    description: "PCI DSS environments, OAuth2, JWT, secure system design.",
    accent: "green",
    items: [
      "PCI DSS - compliant payment environments",
      "OAuth2 / JWT - authentication & authorization",
      "Secure system design - defense in depth",
    ],
  },
  {
    title: "Observability Module",
    description: "Incident response, RCA, monitoring dashboards, alerting.",
    accent: "amber",
    items: [
      "Incident response - real-time production triage",
      "Root Cause Analysis - systematic failure investigation",
      "Monitoring dashboards - metrics, logs, traces",
    ],
  },
  {
    title: "Kubernetes Module",
    description: "Container orchestration, cluster management, production deployments, rollback reliability.",
    accent: "blue",
    items: [
      "Kubernetes cluster deployments and container orchestration in production",
      "Deployment pipelines, rollback strategies, and uptime management",
      "Pod scaling, resource management, and health checks",
    ],
  },
  {
    title: "ArgoCD Module",
    description: "GitOps continuous delivery, declarative deployments, ArgoCD pipeline management.",
    accent: "green",
    items: [
      "GitOps-based deployment workflows using ArgoCD",
      "Declarative application delivery to production infrastructure",
      "Sync policies, rollback management, and deployment observability",
    ],
  },
  {
    title: "Grafana Module",
    description: "Observability dashboards, metrics visualization, alerting, production monitoring.",
    accent: "amber",
    items: [
      "Grafana dashboards for system health and performance monitoring",
      "Metrics visualization across distributed services",
      "Alert configuration and incident response support",
    ],
  },
];

export default function Capabilities() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
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
      id="capabilities"
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
<span className="text-xs font-mono text-amber tracking-widest uppercase">
  {'// System Modules'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
            Capabilities
          </h2>

          <p className="text-text-secondary text-base mb-12 max-w-2xl leading-relaxed">
            Each capability is a production-tested system module-battle-hardened across
            fintech and telecom environments handling real traffic and real failures.
          </p>

          <div className="grid md:grid-cols-2 gap-4 capability-grid">
            {modules.map((mod, i) => {
              const isOpen = expanded === i;
              return (
                <div
                  key={mod.title}
                  className={`glass-panel rounded-sm transition-all duration-300 ${
                    isOpen ? "border-blue/30" : ""
                  }`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            mod.accent === "green"
                              ? "bg-green"
                              : mod.accent === "amber"
                              ? "bg-amber"
                              : "bg-blue"
                          }`}
                        />
                        <span className="text-xs font-mono text-text-tertiary tracking-wider uppercase">
                          Module
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-text-primary">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {mod.description}
                      </p>
                    </div>
                    <span
                      className={`text-lg transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      } text-text-tertiary`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-border">
                      <ul className="space-y-2 mt-3">
                        {mod.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span
                              className={`text-xs mt-0.5 ${
                                mod.accent === "green"
                                  ? "text-green"
                                  : mod.accent === "amber"
                                  ? "text-amber"
                                  : "text-blue"
                              }`}
                            >
                              &#9656;
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}