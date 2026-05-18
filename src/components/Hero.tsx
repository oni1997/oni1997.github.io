"use client";

const statusMetrics = [
  { label: "SYSTEM UPTIME", value: "99.9%+", color: "green" },
  { label: "DAILY THROUGHPUT", value: "300K+", color: "green" },
  { label: "INCIDENT RESPONSE", value: "<15min", color: "green" },
  { label: "INTEGRATION NODES", value: "12", color: "blue" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/30 to-transparent" />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-glow blur-[120px] opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-green-glow blur-[100px] opacity-20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary tracking-widest uppercase">
              <span className="status-dot green animate-pulse-glow" />
              <span>System Online</span>
              <span className="text-border-bright">|</span>
              <span suppressHydrationWarning>UTC {new Date().toISOString().slice(0, 19).replace("T", " ")}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              <span className="block text-text-primary">Onesmus Dzidzai</span>
              <span className="block gradient-text">Maenzanise</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed max-w-2xl">
              Cloud Infrastructure & Software Engineer
            </p>

            <p className="text-base text-text-tertiary font-mono leading-relaxed max-w-xl">
              &quot;I build and maintain production systems that cannot afford to fail.&quot;
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#profile"
                className="group relative inline-flex items-center gap-2 px-6 py-3 border border-green/40 text-green font-mono text-sm tracking-wider uppercase hover:bg-green/10 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-green group-hover:animate-pulse-glow" />
                View System Profile
              </a>
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 px-6 py-3 border border-border-bright text-text-secondary font-mono text-sm tracking-wider uppercase hover:border-blue/40 hover:text-blue transition-all duration-300"
              >
                View Experience
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-panel rounded-sm p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-text-tertiary tracking-wider uppercase border-b border-border pb-3">
                <span>System Status</span>
                <span className="flex items-center gap-1.5">
                  <span className="status-dot green animate-pulse-glow" />
                  Operational
                </span>
              </div>

              <div className="space-y-3">
                {statusMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between text-sm group"
                  >
                    <span className="text-text-tertiary font-mono text-xs tracking-wider">
                      {metric.label}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-text-primary font-mono font-medium">
                        {metric.value}
                      </span>
                      <span className={`status-dot ${metric.color}`} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-border">
                <div className="flex justify-between text-xs font-mono text-text-tertiary mb-1.5">
                  <span>System Load</span>
                  <span>82%</span>
                </div>
                <div className="progress-bar" style={{ "--progress": "82%" } as React.CSSProperties} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="hero-status-metrics flex items-center gap-4 text-xs font-mono text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <span className="status-dot green" />
              CloudReady
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot green" />
              PCI DSS Compliant
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot blue" />
              Distributed Systems
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot amber" />
              Observability
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot blue" />
              Kubernetes
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot green" />
              ArgoCD
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <span className="status-dot amber" />
              Grafana
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-tertiary to-transparent" />
      </div>
    </section>
  );
}