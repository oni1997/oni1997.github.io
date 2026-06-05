"use client";

import { useEffect, useState, useRef } from "react";

interface Tool {
  name: string;
  description: string;
  metrics: { label: string; value: string; color: "green" | "blue" | "amber" }[];
  accent: "green" | "blue" | "amber";
}

const tools: Tool[] = [
  {
    name: "Kubernetes",
    description: "Container orchestration across EKS clusters. Pod management, rollouts, resource scaling, and health checks in production.",
    accent: "blue",
    metrics: [
      { label: "Clusters", value: "Production", color: "green" },
      { label: "Deployments", value: "Rolling", color: "blue" },
      { label: "Health", value: "Stable", color: "green" },
    ],
  },
  {
    name: "ArgoCD",
    description: "GitOps delivery for all production deployments. Declarative sync policies, automated rollbacks, and application health monitoring.",
    accent: "green",
    metrics: [
      { label: "Sync Status", value: "Healthy", color: "green" },
      { label: "Strategy", value: "GitOps", color: "blue" },
      { label: "Rollbacks", value: "Automated", color: "green" },
    ],
  },
  {
    name: "Grafana",
    description: "Unified observability dashboards for system health, application performance, and infrastructure metrics across all environments.",
    accent: "amber",
    metrics: [
      { label: "Dashboards", value: "Custom", color: "amber" },
      { label: "Data Sources", value: "Multiple", color: "blue" },
      { label: "Alerts", value: "Configured", color: "green" },
    ],
  },
  {
    name: "Prometheus",
    description: "Metrics collection and alerting for distributed systems. Custom alert rules, time-series analysis, and incident trigger pipelines.",
    accent: "blue",
    metrics: [
      { label: "Collection", value: "Real-time", color: "green" },
      { label: "Alert Rules", value: "Custom", color: "amber" },
      { label: "Retention", value: "Long-term", color: "blue" },
    ],
  },
  {
    name: "AWS Lambda",
    description: "Serverless compute for event-driven workloads. Integrated with API Gateway, SQS, and S3 for scalable production processing.",
    accent: "green",
    metrics: [
      { label: "Runtimes", value: "Node.js / Go", color: "green" },
      { label: "Triggers", value: "Event-driven", color: "blue" },
      { label: "Scale", value: "Auto", color: "amber" },
    ],
  },
  {
    name: "Terraform",
    description: "Infrastructure as Code for provisioning and managing cloud resources. Modular configurations, state management, and pipeline-driven deployments.",
    accent: "blue",
    metrics: [
      { label: "Provider", value: "AWS", color: "green" },
      { label: "State", value: "Remote", color: "blue" },
      { label: "Workflow", value: "CI/CD", color: "amber" },
    ],
  },
];

export default function Tooling() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tooling"
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
              {"// Daily Tooling"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
            Production Stack
          </h2>

          <p className="text-text-secondary text-base mb-12 max-w-2xl leading-relaxed">
            Tools I operate daily in production environments. Every component is
            battle-tested under real traffic and real incidents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="glass-panel rounded-sm p-5 hover:border-border-bright transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        tool.accent === "green"
                          ? "bg-green"
                          : tool.accent === "amber"
                            ? "bg-amber"
                            : "bg-blue"
                      }`}
                    />
                    <span className="text-sm font-mono text-text-primary font-medium">
                      {tool.name}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <span className="status-dot green animate-pulse-glow" />
                    <span className="text-[10px] font-mono text-text-tertiary tracking-wider uppercase">
                      Operational
                    </span>
                  </span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4 min-h-[3rem]">
                  {tool.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-border/50">
                  {tool.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-mono text-text-tertiary tracking-wider uppercase">
                        {m.label}
                      </span>
                      <span
                        className={`font-mono flex items-center gap-1.5 ${
                          m.color === "green"
                            ? "text-green"
                            : m.color === "amber"
                              ? "text-amber"
                              : "text-blue"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            m.color === "green"
                              ? "bg-green"
                              : m.color === "amber"
                                ? "bg-amber"
                                : "bg-blue"
                          }`}
                        />
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
