const shortcuts = [
  { keys: ["⌘", "⇧", "K"], action: "Open Kova" },
  { keys: ["⌘", "⇧", "V"], action: "Clipboard" },
  { keys: ["⌘", "⇧", "M"], action: "Monitor" },
];

export function WorkflowMock() {
  return (
    <div className="grid h-full min-h-[200px] grid-cols-1 gap-3 rounded-xl border border-border-subtle/60 bg-canvas p-4 sm:grid-cols-2">
      <div className="rounded-lg border border-border-subtle/50 bg-surface p-3">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Shortcuts
        </p>
        <ul className="space-y-2">
          {shortcuts.map((s) => (
            <li key={s.action} className="flex items-center justify-between gap-2">
              <span className="text-xs text-text-secondary">{s.action}</span>
              <span className="flex gap-0.5">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="rounded border border-border-subtle bg-void px-1.5 py-0.5 font-mono text-[10px] text-text-muted"
                  >
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-border-subtle/50 bg-surface p-3">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Layout
        </p>
        <div className="space-y-2">
          {["Monitor", "Clipboard", "Cleanup"].map((tool, i) => (
            <div
              key={tool}
              className="flex items-center gap-2 rounded-md border border-border-subtle/40 bg-canvas px-2 py-1.5"
            >
              <span className="cursor-grab text-text-muted">⋮⋮</span>
              <span className="flex-1 text-xs text-text-primary">{tool}</span>
              <span
                className={`h-4 w-7 rounded-full ${i < 2 ? "bg-accent/40" : "bg-border"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
