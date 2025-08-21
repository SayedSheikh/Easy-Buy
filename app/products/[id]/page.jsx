import Image from "next/image";

export default async function ProductDetail({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>Product ID is required</div>;
  }

  const res = await fetch(
    `https://easy-buy-black.vercel.app/api/products/${id}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  return (
    <div className="  text-white px-6 py-8 flex justify-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2 h-80 relative rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-2">
              Category:{" "}
              <span className="text-blue-400">{product.category}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Price: <span className="text-green-400">${product.price}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Rating:{" "}
              <span className="text-yellow-400">⭐ {product.rating}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Stock: <span className="text-gray-300">{product.stock}</span>
            </p>
          </div>

          {/* <button className="btn btn-primary mt-4 self-start">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}
