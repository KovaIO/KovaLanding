export const SITE = {
  name: "Kova",
  tagline: "Your workspace, one menu away.",
  description:
    "A fast, lightweight desktop utility for system monitoring, clipboard history, quick actions, and workspace control. Built with Tauri and Rust for Windows and macOS.",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PLATFORMS = ["macOS", "Windows"] as const;

export const BENTO_FEATURES = [
  {
    id: "monitoring",
    badge: "System Monitor",
    title: "See what your machine is doing at a glance.",
    description:
      "CPU, memory, network, and disk — live metrics in a compact panel that stays out of your way until you need it.",
    layout: "wide" as const,
    visual: "monitor" as const,
  },
  {
    id: "clipboard",
    badge: "Clipboard",
    title: "Everything you copied, still there.",
    description:
      "Searchable history with instant paste. Local-first storage keeps it fast and private.",
    layout: "narrow" as const,
    visual: "clipboard" as const,
  },
  {
    id: "launcher",
    badge: "Quick Actions",
    title: "Launch anything without leaving flow.",
    description:
      "Apps, files, and custom commands from a single shortcut — like a launcher built into your tray.",
    layout: "narrow" as const,
    visual: "launcher" as const,
  },
  {
    id: "cleanup",
    badge: "Disk Cleanup",
    title: "Reclaim space without the guesswork.",
    description:
      "Scan caches, logs, and large folders. Review before you delete — nothing happens without your say.",
    layout: "wide" as const,
    visual: "cleanup" as const,
  },
  {
    id: "workflow",
    badge: "Workflows",
    title: "Shape the app around how you work.",
    description:
      "Customize shortcuts, layouts, and which tools surface first. Your setup, not ours.",
    layout: "wide" as const,
    visual: "workflow" as const,
  },
  {
    id: "tray",
    badge: "Tray Native",
    title: "Always one shortcut away.",
    description:
      "Lives in the system tray. Opens instantly — low memory, native performance on every platform.",
    layout: "narrow" as const,
    visual: "tray" as const,
  },
] as const;

export const SHOWCASE_FEATURES = [
  {
    id: "tray-first",
    eyebrow: "Tray-first design",
    title: "Built to live in the background, ready when you are.",
    description:
      "Kova stays in your system tray and responds to global shortcuts in milliseconds. No dock icon clutter, no window hunting — open, act, dismiss.",
    visual: "tray" as const,
    reversed: false,
  },
  {
    id: "performance",
    eyebrow: "Native performance",
    title: "Rust under the hood. Light on your machine.",
    description:
      "Tauri keeps the footprint small while delivering a polished UI. Fast cold starts, low RAM usage, and the snappy feel of a native utility — not another Electron hog.",
    visual: "monitor" as const,
    reversed: true,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to organize your desktop locally.",
    features: [
      "System monitoring",
      "Clipboard history (local)",
      "Quick actions & launcher",
      "Disk cleanup basics",
      "Workflow customization",
    ],
    cta: "Download",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "Coming soon",
    period: "license via Polar.sh",
    description:
      "Premium tools and optional cloud sync — no accounts, just a license key.",
    features: [
      "Everything in Free",
      "Advanced cleanup & automation",
      "Cloud clipboard sync (optional)",
      "Cross-device preferences",
      "Priority updates",
    ],
    cta: "Notify me",
    highlighted: true,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need to create an account?",
    answer:
      "No. Kova does not use traditional accounts or passwords. Free features work entirely offline with local storage. Pro licensing uses a simple license key — no login forms.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Most data lives in a local SQLite database on your machine for speed and privacy. Optional cloud sync for Pro users is planned for clipboard, preferences, and workflows — always opt-in.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Kova targets macOS and Windows with a shared codebase built on Tauri and Rust. Linux may follow based on demand.",
  },
  {
    question: "How does Pro licensing work?",
    answer:
      "You purchase a license through Polar.sh and receive a key that unlocks premium features on your devices. The app validates the license through a lightweight backend — no password to remember.",
  },
  {
    question: "Is cloud sync required?",
    answer:
      "Never. Cloud sync is optional and designed for users who want clipboard or settings parity across machines. Local-first remains the default.",
  },
  {
    question: "How is this different from a menu bar manager?",
    answer:
      "Kova combines monitoring, clipboard, cleanup, and launcher tools in one lightweight tray app — tuned for speed and a single global shortcut, not a pile of separate utilities.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;
