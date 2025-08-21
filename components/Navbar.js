"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  // Helper to check if the link is active
  const isActive = (href) => pathname === href;

  return (
    <div className="navbar sticky top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 justify-between shadow-lg">
      {/* Left: Logo */}
      <div className="flex">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-300 transition">
          EasyBuy
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link
          href="/"
          className={`hover:text-blue-400 transition ${
            isActive("/") ? "text-blue-400 font-bold" : ""
          }`}>
          Home
        </Link>
        <Link
          href="/products"
          className={`hover:text-blue-400 transition ${
            isActive("/products") ? "text-blue-400 font-bold" : ""
          }`}>
          Products
        </Link>
        <Link
          href="/dashboard/add-product"
          className={`hover:text-blue-400 transition ${
            isActive("/dashboard/add-product") ? "text-blue-400 font-bold" : ""
          }`}>
          Add Product
        </Link>
      </div>

      {/* Right: Auth */}
      <div className="flex-none">
        {session ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-52">
              <li>
                <p className="text-gray-300">{session.user?.name}</p>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className="text-red-500 hover:text-red-400">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="hidden md:flex btn btn-sm btn-primary text-white hover:bg-blue-600">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-gray-800 rounded-box w-52">
          <li>
            <Link
              href="/"
              className={isActive("/") ? "text-blue-400 font-bold" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                isActive("/products") ? "text-blue-400 font-bold" : ""
              }>
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className={
                isActive("/dashboard/add-product")
                  ? "text-blue-400 font-bold"
                  : ""
              }>
              Add Product
            </Link>
          </li>
          {session ? (
            <>
              <li>
                <p className="text-gray-300">{session.user?.name}</p>
              </li>
              <li>
                <button onClick={() => signOut()} className="text-red-500">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className="text-blue-400">
                Login / Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
