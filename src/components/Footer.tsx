export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-5 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary">
          <span className="status-dot green" />
          <span>Onesmus Dzidzai Maenzanise</span>
          <span className="w-px h-3 bg-border" />
          <span>Cloud Infrastructure &amp; Software Engineer</span>
        </div>
        <div className="text-xs font-mono text-text-tertiary">
          <span className="text-green/60">System Status:</span> Operational
        </div>
      </div>
    </footer>
  );
}