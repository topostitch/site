"use client";

import { ObjectViewer, ReactThreeFiberRenderer } from "@topostitch/react";
import type { TopoObject } from "@topostitch/core";

export function Viewer({ object }: { object: TopoObject }) {
  return (
    <ObjectViewer
      object={object}
      renderer={ReactThreeFiberRenderer}
      options={{
        controls: true,
        cameraPosition: [0, 1.5, 4],
        height: "600px",
        backgroundColor: "#111",
      }}
    />
  );
}
