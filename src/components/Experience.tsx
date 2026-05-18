"use client";

import { useEffect, useState, useRef } from "react";

interface Role {
  period: string;
  title: string;
  organization: string;
  highlights: string[];
  accent: "green" | "blue" | "amber";
}

const roles: Role[] = [
  {
    period: "Jan 2025 — Present",
    title: "Intermediate Software Engineer",
    organization: "APS Holdings",
    accent: "green",
    highlights: [
      "Supported and maintained cloud-based payment and integration platforms at production scale",
      "Second-line incident response: investigating failed transactions, degraded integrations, and performance issues",
      "Led integrations between internal platforms and external partner systems",
      "Built and maintained Spring Boot microservices for partner-facing API integrations",
      "Took technical ownership of cross-organisation integration workstreams involving Telecoms partners",
      "Worked within PCI DSS requirements, managing authentication, access control, and audit needs",
      "Contributed to CI/CD pipelines and containerized deployments",
    ],
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "Junior Software Engineer",
    organization: "APS Holdings",
    accent: "blue",
    highlights: [
      "Developed and supported Golang-based backend services in live production environments",
      "Assisted with production incident investigations and post-incident fixes",
      "Worked with Kubernetes-based deployment pipelines, improving deployment speed and rollback reliability",
      "Supported operational dashboards and reporting used by finance and operations teams",
    ],
  },
  {
    period: "May 2023 – Dec 2023",
    title: "Software Engineer",
    organization: "CartShare (Remote)",
    accent: "amber",
    highlights: [
      "Developed backend services and integrations for e-commerce payment and data systems",
      "Built and supported AWS Lambda-based workflows and analytics pipelines",
      "Implemented automated deployment workflows to reduce time-to-market and deployment errors",
      "Supported operational issues related to data consistency and transaction processing",
    ],
  },
  {
    period: "Sep 2022 – Jan 2024",
    title: "Software Engineer in Training",
    organization: "WeThinkCode_",
    accent: "amber",
    highlights: [
      "Built full-stack applications using Python, Java, JavaScript, and SQL",
      "Worked in agile teams delivering production-style projects with testing and documentation expectations",
      "Achieved high test coverage and developed disciplined debugging and review practices",
    ],
  },
];

export default function Experience() {
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

  const accentBorder = (color: string) => {
    const map: Record<string, string> = {
      green: "border-green/30",
      blue: "border-blue/30",
      amber: "border-amber/30",
    };
    return map[color] || map.green;
  };

  const accentDot = (color: string) => {
    const map: Record<string, string> = {
      green: "bg-green shadow-[0_0_8px_rgba(0,255,136,0.6)]",
      blue: "bg-blue shadow-[0_0_8px_rgba(0,136,255,0.6)]",
      amber: "bg-amber shadow-[0_0_8px_rgba(255,170,0,0.6)]",
    };
    return map[color] || map.green;
  };

  return (
    <section
      id="experience"
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
  {'// Production History'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-green/30 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mb-8 leading-tight">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {roles.map((role, i) => (
                <div
                  key={role.period}
                  className={`relative pl-0 md:pl-8 transition-all duration-700 delay-${i * 150} ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className={`hidden md:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full ${accentDot(role.accent)}`} />

                  <div className={`glass-panel rounded-sm p-6 border-l-2 experience-card ${accentBorder(role.accent)}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <span className={`text-xs font-mono tracking-widest uppercase ${
                          role.accent === "green" ? "text-green" : role.accent === "blue" ? "text-blue" : "text-amber"
                        }`}>
                          {role.period}
                        </span>
                        <h3 className="text-lg font-medium text-text-primary mt-1">
                          {role.title}
                        </h3>
                        <p className="text-sm text-text-tertiary font-mono">
                          {role.organization}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 pl-0 list-disc list-inside md:list-outside md:pl-5">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-text-secondary leading-relaxed"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
