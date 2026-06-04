export function TrayMock() {
  return (
    <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-4 rounded-xl border border-border-subtle/60 bg-canvas p-6">
      <div className="flex w-full max-w-[200px] items-center justify-between rounded-full border border-border-subtle bg-surface px-4 py-2">
        <span className="text-[10px] text-text-muted">Wi‑Fi</span>
        <span className="text-[10px] text-text-muted">🔋</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-void ring-1 ring-accent/30">
          <span className="block h-2 w-2 rotate-45 rounded-sm bg-accent/90" />
        </span>
        <span className="text-[10px] text-text-muted">12:40</span>
      </div>
      <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-border-subtle bg-surface-elevated shadow-2xl">
        <div className="border-b border-border-subtle/50 px-3 py-2">
          <span className="font-mono text-[10px] text-text-muted">Kova</span>
        </div>
        <div className="space-y-1 p-2">
          {["System Monitor", "Clipboard", "Quick Actions"].map((item) => (
            <div
              key={item}
              className="rounded-md px-2 py-1.5 text-xs text-text-secondary hover:bg-canvas"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
