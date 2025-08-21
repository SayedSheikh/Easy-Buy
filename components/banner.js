"use client";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden rounded-xl">
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="Easy Buy Banner"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Easy Buy</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover exclusive deals and shop your favorite products with ease.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition duration-300 cursor-pointer">
            Shop Now
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-transparent border border-white font-semibold rounded-xl hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
