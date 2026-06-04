const actions = [
  { icon: "⌘", label: "Open Downloads", shortcut: "⌘D" },
  { icon: "◆", label: "Empty Trash", shortcut: "⌘⇧T" },
  { icon: "◎", label: "Toggle Do Not Disturb", shortcut: "⌘." },
  { icon: "▣", label: "New Terminal Tab", shortcut: "⌘↵" },
];

export function LauncherMock() {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-xl border border-border-subtle/60 bg-canvas p-2">
      <div className="mb-2 rounded-lg border border-border-subtle/50 bg-surface px-3 py-2">
        <span className="font-mono text-[11px] text-text-muted">
          Type to search…
        </span>
      </div>
      <ul className="flex-1 space-y-0.5">
        {actions.map((action, i) => (
          <li
            key={action.label}
            className={`flex items-center gap-3 rounded-lg px-2 py-2 ${i === 0 ? "bg-surface-elevated ring-1 ring-border-subtle/80" : ""}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface text-sm text-text-secondary">
              {action.icon}
            </span>
            <span className="flex-1 text-xs text-text-primary">
              {action.label}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              {action.shortcut}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
