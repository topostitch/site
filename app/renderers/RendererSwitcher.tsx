"use client";

import { useState } from "react";
import type { TopoObject } from "@topostitch/core";
import { renderers } from "@topostitch/react/renderers";
import { ObjectViewer } from "@topostitch/react";

type RendererId = "model-viewer" | "react-three-fiber" | "three";

export function RendererSwitcher({ object }: { object: TopoObject }) {
  const [selectedRenderer, setSelectedRenderer] =
    useState<RendererId>("model-viewer");

  const current = renderers.find(
    (renderer) => renderer.id === selectedRenderer,
  )! as (typeof renderers)[number] & {
    renderer: any;
    options: any;
  };

  return (
    <section>
      <div className="mb-4 flex gap-2 text-sm">
        {renderers.map((renderers) => (
          <button
            key={renderers.id}
            type="button"
            onClick={() => setSelectedRenderer(renderers.id)}
            className={`rounded-lg border px-4 py-2 ${
              selectedRenderer === renderers.id
                ? "border-white text-white"
                : "border-zinc-800 text-zinc-500 hover:text-white"
            }`}
          >
            {renderers.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <ObjectViewer
          object={object}
          renderer={current.renderer}
          options={current.options}
        />
      </div>
    </section>
  );
}
