import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-green-700">
          DWI
        </Link>
        <ul className="hidden gap-6 text-sm md:flex">
          <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
          <li><Link href="/stories" className="hover:text-green-700">Stories</Link></li>
          <li><Link href="/donate" className="hover:text-green-700">Donate</Link></li>
          <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
        </ul>
        <Link
          href="/request"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
        >
          Request Worker
        </Link>
      </div>
    </nav>
  );
}
