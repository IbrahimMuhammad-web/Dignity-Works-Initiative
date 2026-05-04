import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50 pb-20 md:pb-8">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-green-700">DWI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Restoring dignity through honest work.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
              <li><Link href="/stories" className="hover:text-green-700">Stories</Link></li>
              <li><Link href="/donate" className="hover:text-green-700">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get involved</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><Link href="/request" className="hover:text-green-700">Request a worker</Link></li>
              <li><Link href="/register" className="hover:text-green-700">Register as a worker</Link></li>
              <li><Link href="/contact" className="hover:text-green-700">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Dignity Works Initiative.
        </p>
      </div>
    </footer>
  );
}
