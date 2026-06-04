const items = [
  { type: "text", preview: "npm run tauri dev", time: "2m" },
  { type: "text", preview: "design@kova.app", time: "14m" },
  { type: "text", preview: "const config = { local: true }", time: "1h" },
  { type: "img", preview: "Screenshot 2026-06-04.png", time: "3h" },
];

export function ClipboardMock() {
  return (
    <div className="flex h-full min-h-[220px] flex-col overflow-hidden rounded-xl border border-border-subtle/60 bg-canvas">
      <div className="border-b border-border-subtle/50 px-3 py-2">
        <input
          readOnly
          value="Search clipboard…"
          className="w-full bg-transparent font-mono text-[11px] text-text-muted outline-none"
          aria-hidden
        />
      </div>
      <ul className="flex-1 divide-y divide-border-subtle/40">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-center gap-3 px-3 py-2.5 ${i === 0 ? "bg-surface-elevated/80" : ""}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-surface text-[10px] text-text-muted">
              {item.type === "img" ? "◇" : "T"}
            </span>
            <span className="min-w-0 flex-1 truncate text-xs text-text-secondary">
              {item.preview}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
