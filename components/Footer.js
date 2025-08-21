import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-yellow-400 tracking-wide">
            Easy Buy
          </span>
          <span className="hidden md:inline text-gray-500 text-sm ml-2">
            | Your trusted online marketplace
          </span>
        </div>
        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
          <Link
            href="/dashboard/add-product"
            className="hover:text-yellow-400 transition">
            Add Product
          </Link>
        </div>
        {/* Right: Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Easy Buy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
