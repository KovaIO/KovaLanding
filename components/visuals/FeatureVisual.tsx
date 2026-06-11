"use client";

import { useEffect, useRef, useState } from "react";

export type VideoInfo = {
  src: string;
  orientation: "vertical" | "horizontal";
};

export function FeatureVisual({ video }: { video: VideoInfo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? video.src : undefined}
      autoPlay={shouldLoad}
      loop={shouldLoad}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      style={{ pointerEvents: "none", userSelect: "none" }}
      className="h-full w-full object-cover"
    />
  );
}
