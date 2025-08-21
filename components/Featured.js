"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 tracking-tight">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  //  priority   <-- Remove this line
                />
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h3 className="text-xl font-semibold text-white mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-yellow-400">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-300">
                    ⭐ {product.rating}
                  </span>
                </div>
                <button
                  onClick={() => router.push(`/products/${product._id}`)}
                  className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
