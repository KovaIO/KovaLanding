export const SITE = {
  name: "Kova",
  tagline: "Your workspace, one menu away.",
  description:
    "A fast, lightweight desktop utility for system monitoring, clipboard history, quick actions, and workspace control. Built with Tauri and Rust for Windows and macOS.",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BENTO_FEATURES = [
  {
    id: "workflow",
    badge: "Workflows",
    title: "Shape the app around how you work.",
    description: "Customize shortcuts, layouts, and which tools surface first. Your setup, not ours.",
    layout: "wide",
    video: { src: "/Workspaces.mp4", orientation: "horizontal" },
  },
  {
    id: "monitoring",
    badge: "System Monitor",
    title: "See what your machine is doing at a glance.",
    description: "CPU, memory, network, and disk — live metrics in a compact panel that stays out of your way until you need it.",
    layout: "narrow",
    video: { src: "/Metrics.mp4", orientation: "vertical" },
  },
  {
    id: "clipboard",
    badge: "Clipboard",
    title: "Everything you copied, still there.",
    description: "Searchable history with instant paste. Local-first storage keeps it fast and private.",
    layout: "narrow",
    video: { src: "/Clipboard.mp4", orientation: "vertical" },
  },
  {
    id: "tray",
    badge: "Tray Native",
    title: "Always one shortcut away.",
    description: "Lives in the system tray. Opens instantly — low memory, native performance on every platform.",
    layout: "wide",
    video: { src: "/Tray.mp4", orientation: "horizontal" },
  },
  {
    id: "cleanup",
    badge: "Disk Cleanup",
    title: "Reclaim space without the guesswork.",
    description: "Scan caches, logs, and large folders. Review before you delete — nothing happens without your say.",
    layout: "narrow",
    video: { src: "/Disk.mp4", orientation: "vertical" },
  },
  {
    id: "coming-soon",
    badge: "Coming Soon",
    title: "More tools on the way.",
    description: "",
    layout: "wide" as const,
    video: null,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to organize your desktop locally.",
    features: ["System monitoring", "Limited clipboard history", "Customizing"],
    cta: "Download",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$2.99",
    period: "per month",
    description: "Premium tools for power users.",
    features: [
      "Everything in Free",
      "Unlimited clipboard",
      "Monitoring dimming",
      "Disk cleanup",
      "Workspace profiles",
    ],
    pricingOptions: [
      {
        productId: "a6154172-e7a1-424f-9da5-846f37f9eba8",
        period: "Monthly",
        price: "$2.99",
        devices: 1,
      },
      {
        productId: "188f181b-a33b-4224-90a5-0793a47d0bea",
        period: "Yearly",
        price: "$24",
        devices: 3,
      },
      {
        productId: "3f627530-068c-4815-bb1b-6b6adc36a674",
        period: "Lifetime",
        price: "$59",
        devices: 3,
      },
    ],
    cta: "Get started",
    highlighted: true,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need to create an account?",
    answer:
      "No. Free features work entirely offline with local storage. Pro licensing uses just your email, no login forms.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Data lives in a local SQLite database on your machine for speed and privacy. Optional cloud sync for Pro users is planned for clipboard, preferences and workflows.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Kova runs on macOS and Windows. Linux support may follow based on demand.",
  },
  {
    question: "How does Pro licensing work?",
    answer: "Enter your email inside Kova to unlock Pro features.",
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
    links: [{ label: "FAQ", href: "#faq" }],
  },
  {
    title: "Connect",
    links: [
      { label: "campfire.softwaredev@gmail.com", href: "" },
      { label: "@Kevin_rh0", href: "https://x.com/Kevin_rh0" },
    ],
  },
] as const;
