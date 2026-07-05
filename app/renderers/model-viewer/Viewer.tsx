"use client";

import { ObjectViewer, ModelViewerRenderer } from "@topostitch/react";
import type { TopoObject } from "@topostitch/core";

export function Viewer({ object }: { object: TopoObject }) {
  return (
    <ObjectViewer
      object={object}
      renderer={ModelViewerRenderer}
      options={{
        autoRotate: true,
        cameraControls: true,
        height: "600px",
        backgroundColor: "#111",
      }}
    />
  );
}
