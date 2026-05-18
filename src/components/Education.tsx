"use client";

import { useEffect, useState, useRef } from "react";

const education = [
  {
    period: "Expected 2026",
    title: "B.S. Software Development",
    organization: "BYU-Idaho",
    description:
      "Bachelor's degree program in Software Development, focused on software engineering principles, data structures, and system design.",
  },
  {
    period: "Aug 2022 – Jan 2024",
    title: "National Certificate: Information Technology (Systems Development) NQF 5",
    organization: "WeThinkCode_",
    description:
      "National certificate in systems development covering programming, system analysis, and software development methodologies. Completed through an intensive peer-led engineering program with emphasis on testing, agile delivery, debugging, and real-world software development practices.",
  },
];

export default function Education() {
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
      id="education"
      ref={ref}
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8 md:mb-12">
<span className="text-[10px] md:text-xs font-mono text-amber tracking-widest uppercase">
  {'// System Evolution'}
</span>
            <div className="h-px flex-1 bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-text-primary mb-6 md:mb-8 leading-tight">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={edu.title}
                className={`glass-panel rounded-sm p-4 md:p-5 transition-all duration-700 delay-${i * 100} ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-1">
                  <h3 className="text-sm md:text-base font-medium text-text-primary leading-snug">
                    {edu.title}
                  </h3>
                  <span className="text-[11px] md:text-xs font-mono text-amber whitespace-nowrap shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-blue font-mono mb-2">
                  {edu.organization}
                </p>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
