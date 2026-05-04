export const metadata = { title: "Donate — DWI" };

export default function DonatePage() {
  return (
    <div>
      <header className="bg-green-700 p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Support the work</h1>
        <p className="mt-2 text-sm">
          Help us bring more workers off the street and into honest jobs.
        </p>
      </header>

      <div className="mx-auto max-w-md p-6">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="font-semibold">Donate via bank transfer</h2>
          <p className="mt-2 text-sm text-gray-600">
            Bank: Example Bank
            <br />
            Account: Dignity Works Initiative
            <br />
            Number: 0000000000
          </p>
        </div>

        <a
          href="https://wa.me/234XXXXXXXXXX?text=I%20would%20like%20to%20donate%20to%20DWI"
          className="mt-4 block rounded bg-green-600 py-2 text-center text-white hover:bg-green-700"
        >
          Donate via WhatsApp
        </a>
      </div>
    </div>
  );
}
