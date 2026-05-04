export default function CTASection() {
  return (
    <section className="bg-green-700 py-10 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-xl font-bold">
          Ready to hire honest help, or earn honest work?
        </h2>
        <p className="mt-2 text-sm text-green-50">
          One tap to start. We will reach out on WhatsApp.
        </p>

        <div className="mt-5 flex justify-center gap-3">
          <a
            href="/request"
            className="rounded bg-white px-4 py-2 font-medium text-green-700"
          >
            Request Worker
          </a>
          <a
            href="/register"
            className="rounded border border-white px-4 py-2 font-medium"
          >
            Become a Worker
          </a>
        </div>
      </div>
    </section>
  );
}
