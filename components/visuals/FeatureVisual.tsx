import type { ReactNode } from "react";
import { ClipboardMock } from "./ClipboardMock";
import { DiskCleanupMock } from "./DiskCleanupMock";
import { LauncherMock } from "./LauncherMock";
import { SystemMonitorMock } from "./SystemMonitorMock";
import { TrayMock } from "./TrayMock";
import { WorkflowMock } from "./WorkflowMock";

export type VisualType =
  | "monitor"
  | "clipboard"
  | "launcher"
  | "cleanup"
  | "workflow"
  | "tray";

const visuals: Record<VisualType, () => ReactNode> = {
  monitor: () => <SystemMonitorMock />,
  clipboard: () => <ClipboardMock />,
  launcher: () => <LauncherMock />,
  cleanup: () => <DiskCleanupMock />,
  workflow: () => <WorkflowMock />,
  tray: () => <TrayMock />,
};

export function FeatureVisual({ type }: { type: VisualType }) {
  const Visual = visuals[type];
  return <Visual />;
}
