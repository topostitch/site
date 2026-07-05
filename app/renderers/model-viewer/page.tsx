import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { fromSmithsonian } from "@topostitch/core";
import { Viewer } from "./Viewer";

function getArmstrongObject() {
  const metadataPath = path.join(
    process.cwd(),
    "app/renderers/model-viewer/armstrong/provider-metadata.txt",
  );

  const rawMetadata = fs.readFileSync(metadataPath, "utf8");

  return fromSmithsonian(rawMetadata, {
    representations: [
      {
        id: "primary-model",
        type: "model",
        format: "glb",
        src: "/models/armstrong/model.glb",
        poster: "/models/armstrong/poster.webp",
        label: "3D Model",
        ar: true,
      },
    ],
  });
}

export function generateMetadata(): Metadata {
  const object = getArmstrongObject();

  return {
    title: object.title,
    description: object.description,
  };
}

export default function ModelViewerExamplePage() {
  const object = getArmstrongObject();
  const metadata = object.metadata ?? {};
  const location = object.metadata?.location as
    | {
        label?: string;
        address?: string;
        latitude?: number;
        longitude?: number;
      }
    | undefined;

  const mapQuery = location
    ? encodeURIComponent(
        location.latitude && location.longitude
          ? `${location.latitude},${location.longitude}`
          : (location.address ?? location.label ?? ""),
      )
    : "";

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back to TopoStitch
        </a>
        <div className="mt-4 flex gap-4 text-sm">
          <a
            href="/renderers/model-viewer"
            className="text-zinc-500 hover:text-white"
          >
            Model Viewer
          </a>
          <a
            href="/renderers/react-three-fiber"
            className="text-zinc-500 hover:text-white"
          >
            React Three Fiber
          </a>
        </div>

        <h1 className="mt-8 text-4xl font-bold">{object.title}</h1>

        <p className="mt-4 max-w-2xl text-zinc-400">{object.description}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800">
          <Viewer object={object} />
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Normalized Metadata</h2>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key}>
                <dt className="text-xs uppercase tracking-wide text-zinc-500">
                  {key}
                </dt>
                <dd className="mt-1 text-zinc-200 break-words">
                  {typeof value === "object" && value !== null ? (
                    <div className="space-y-1">
                      {Object.entries(value).map(([nestedKey, nestedValue]) => (
                        <div key={nestedKey}>
                          <span className="text-zinc-500">{nestedKey}: </span>
                          <span>{String(nestedValue ?? "—")}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    String(value ?? "—")
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        {location && mapQuery ? (
          <section className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="p-6">
              <h2 className="text-xl font-semibold">World Location</h2>
              <p className="mt-2 text-zinc-400">
                {location.label ?? location.address ?? "Location available"}
              </p>
              {location.address ? (
                <p className="mt-1 text-sm text-zinc-500">{location.address}</p>
              ) : null}
            </div>

            <iframe
              title="Object location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        ) : null}

        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <details>
            <summary className="cursor-pointer font-semibold text-zinc-100">
              Provider Payload (Smithsonian)
            </summary>

            <pre className="mt-4 overflow-x-auto rounded-lg bg-black p-4 text-xs text-zinc-300">
              {JSON.stringify(object.providers?.[0] ?? null, null, 2)}
            </pre>
          </details>
        </section>
      </div>
    </main>
  );
}
