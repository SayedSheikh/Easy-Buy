"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-gray-900 shadow-xl hover:shadow-2xl transition">
      <figure className="relative w-full h-55 px-4 pt-4 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="rounded-[20px] object-cover p-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-gray-200">{product.description}</p>
        <p className="font-semibold text-lg">${product.price}</p>
        <div className="flex items-center mt-2">
          <span className="mr-2">⭐ {product.rating}</span>
          <span className="text-gray-400">({product.stock} in stock)</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
