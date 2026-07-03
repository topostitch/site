export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">TopoStitch</h1>

        <p className="mt-8 text-xl text-zinc-300">
          Open framework for stitching digital context to the physical world.
        </p>

        <p className="mt-4 text-zinc-500">
          Build contextual 3D experiences for the open web.
        </p>

        <a
          href="https://github.com/topostitch"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
        >
          View on GitHub
        </a>

        <p className="mt-12 text-sm text-zinc-600">
          Documentation coming soon.
        </p>
      </div>
    </main>
  );
}
