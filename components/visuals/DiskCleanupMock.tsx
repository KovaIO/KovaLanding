const categories = [
  { name: "Application caches", size: "4.2 GB", checked: true },
  { name: "System logs", size: "890 MB", checked: true },
  { name: "Downloads archive", size: "12.1 GB", checked: false },
  { name: "Xcode derived data", size: "6.8 GB", checked: false },
];

export function DiskCleanupMock() {
  return (
    <div className="flex h-full min-h-[200px] gap-4 rounded-xl border border-border-subtle/60 bg-canvas p-4 md:gap-6">
      <div className="flex shrink-0 flex-col items-center justify-center">
        <div
          className="relative flex h-24 w-24 items-center justify-center rounded-full md:h-28 md:w-28"
          style={{
            background: `conic-gradient(var(--accent) 0deg 216deg, var(--border) 216deg 360deg)`,
          }}
        >
          <div className="flex h-[70%] w-[70%] flex-col items-center justify-center rounded-full bg-canvas">
            <span className="font-serif text-2xl text-text-primary">60%</span>
            <span className="font-mono text-[9px] uppercase text-text-muted">
              used
            </span>
          </div>
        </div>
      </div>
      <ul className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className="flex items-center gap-2 rounded-lg border border-border-subtle/40 bg-surface/50 px-2 py-1.5"
          >
            <span
              className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${cat.checked ? "border-accent bg-accent/20 text-[8px] text-accent" : "border-border-subtle"}`}
            >
              {cat.checked ? "✓" : ""}
            </span>
            <span className="min-w-0 flex-1 truncate text-xs text-text-secondary">
              {cat.name}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              {cat.size}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
