export default function Hero() {
  return (
    <section className="bg-green-700 p-6 text-center text-white">
      <h1 className="text-2xl font-bold">
        Restore Dignity Through Honest Work
      </h1>
      <p className="mt-2">
        Stop begging. Start earning. Hire trusted workers today.
      </p>

      <div className="mt-4 flex justify-center gap-3">
        <a
          href="/request"
          className="rounded bg-white px-4 py-2 text-green-700"
        >
          Request Worker
        </a>
        <a href="/register" className="rounded border px-4 py-2">
          Register as Worker
        </a>
      </div>
    </section>
  );
}
