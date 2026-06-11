export type VideoInfo = {
  src: string;
  orientation: "vertical" | "horizontal";
};

export function FeatureVisual({ video }: { video: VideoInfo }) {
  return (
    <video
      src={video.src}
      autoPlay
      loop
      muted
      playsInline
      style={{ pointerEvents: "none", userSelect: "none" }}
      className="h-full w-full object-cover"
    />
  );
}