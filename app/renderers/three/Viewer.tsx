"use client";

import { ObjectViewer } from "@topostitch/react";
import { ThreeRenderer } from "@topostitch/react/renderers";
import type { TopoObject } from "@topostitch/core";

export function Viewer({ object }: { object: TopoObject }) {
  return (
    <ObjectViewer
      object={object}
      renderer={ThreeRenderer}
      options={{
        height: "600px",
        backgroundColor: "#111",
        autoRotate: true,
      }}
    />
  );
}
