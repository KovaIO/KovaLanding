"use client";

import { useState } from "react";
import { DOWNLOAD_URLS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type Platform = "windows" | "macos" | "other";

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "other";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  return "other";
}

export function DownloadButtons() {
  const [platform] = useState<Platform>(detectPlatform);

  const showWindows = platform === "windows" || platform === "other";
  const showMac = platform === "macos" || platform === "other";

  return (
    <>
      {showWindows && (
        <Button
          variant="primary"
          href={DOWNLOAD_URLS.windows}
          className="flex items-center gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
          Download for Windows
        </Button>
      )}
      {showMac && (
        <Button
          variant="primary"
          href={DOWNLOAD_URLS.macos}
          className="flex items-center gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.61-.69.82-1.26 2.02-1.1 3.12 1.17.09 2.36-.77 3.09-1.62" />
          </svg>
          Download for Mac
        </Button>
      )}
    </>
  );
}
