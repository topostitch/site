export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">TopoStitch</h1>

        <p className="mt-6 text-2xl text-zinc-300">
          An open framework for contextual computing.
        </p>

        <p className="mt-4 text-lg text-zinc-500">
          Stitch digital information to real-world people, places, objects, and
          experiences.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/topostitch"
            className="rounded-lg border border-zinc-700 px-5 py-3 hover:bg-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://github.com/topostitch/docs"
            className="rounded-lg border border-zinc-700 px-5 py-3 hover:bg-zinc-900"
          >
            Documentation
          </a>

          <span className="rounded-lg border border-zinc-800 px-5 py-3 text-zinc-600">
            Discord (Coming Soon)
          </span>
        </div>

        <div className="mt-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Repositories
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Repo
              name="Core"
              href="https://github.com/topostitch/core"
              description="Platform-agnostic runtime."
            />

            <Repo
              name="React"
              href="https://github.com/topostitch/react"
              description="React and React Three Fiber."
            />

            <Repo
              name="Specifications"
              href="https://github.com/topostitch/specs"
              description="RFCs and architecture."
            />

            <Repo
              name="Examples"
              href="https://github.com/topostitch/examples"
              description="Example applications."
            />

            <Repo
              name="Documentation"
              href="https://github.com/topostitch/docs"
              description="Guides and API reference."
            />

            <Repo
              name="Website"
              href="https://github.com/topostitch/site"
              description="Source for this website."
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function Repo({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="rounded-xl border border-zinc-800 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
    >
      <h3 className="font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </a>
  );
}
