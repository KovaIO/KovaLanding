"use client";

import { motion } from "motion/react";

const ICONS = [
  { label: "Window management", angle: 0, radius: 80 },
  { label: "Focus mode", angle: 60, radius: 90 },
  { label: "Notes", angle: 120, radius: 75 },
  { label: "Automations", angle: 180, radius: 85 },
  { label: "Notifications", angle: 240, radius: 78 },
  { label: "File manager", angle: 300, radius: 88 },
];

function Icon({ index }: { index: number }) {
  const color = "currentColor";

  const icons = [
    // Window
    <svg key="window" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <line x1="2" y1="6.5" x2="14" y2="6.5" />
    </svg>,
    // Crosshair
    <svg key="crosshair" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="8" cy="8" r="3" />
      <line x1="8" y1="1" x2="8" y2="4" />
      <line x1="8" y1="12" x2="8" y2="15" />
      <line x1="1" y1="8" x2="4" y2="8" />
      <line x1="12" y1="8" x2="15" y2="8" />
    </svg>,
    // Document
    <svg key="doc" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M4 2h5l4 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <path d="M9 2v4h4" />
      <line x1="6" y1="9" x2="10" y2="9" />
      <line x1="6" y1="11.5" x2="9" y2="11.5" />
    </svg>,
    // Lightning
    <svg key="bolt" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M9 1L3 9h4.5l-1 6L13 7H8.5z" />
    </svg>,
    // Bell
    <svg key="bell" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M6 11a2 2 0 0 0 4 0" />
      <path d="M3 8.5a5 5 0 0 1 10 0v2a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 10.5z" />
      <line x1="7.5" y1="1" x2="8.5" y2="1" />
    </svg>,
    // Folder
    <svg key="folder" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M2 4.5V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8L6.5 3.5A1 1 0 0 0 5.8 3H3a1 1 0 0 0-1 1z" />
    </svg>,
  ];

  return icons[index] || null;
}

export function ComingSoon() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 pb-6 md:px-8 md:pb-8">
      <div className="relative flex h-48 w-48 items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-text-muted"
        />

        {ICONS.map((item, i) => {
          const angleRad = (item.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * item.radius;
          const y = Math.sin(angleRad) * item.radius;

          return (
            <motion.div
              key={item.label}
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: item.radius * 2,
                height: item.radius * 2,
              }}
              className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-subtle/40 bg-surface text-text-muted"
                  title={item.label}
                >
                  <Icon index={i} />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
