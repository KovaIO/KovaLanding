const bars = [42, 68, 55, 82, 48, 71, 38, 64, 52, 78, 45, 60];

export function SystemMonitorMock() {
  return (
    <div className="flex h-full min-h-[200px] flex-col rounded-xl border border-border-subtle/60 bg-canvas p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Live metrics
        </span>
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-text-muted/40" />
          <span className="h-2 w-2 rounded-full bg-text-muted/40" />
          <span className="h-2 w-2 rounded-full bg-accent/80" />
        </span>
      </div>
      <div className="flex flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-border-subtle to-accent/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 border-t border-border-subtle/50 pt-4">
        {[
          { label: "CPU", value: "24%" },
          { label: "RAM", value: "6.2G" },
          { label: "Disk", value: "412G" },
          { label: "Net", value: "↑ 2.1" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-[9px] uppercase text-text-muted">
              {stat.label}
            </p>
            <p className="font-mono text-xs text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
