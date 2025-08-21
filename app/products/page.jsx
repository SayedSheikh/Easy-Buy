import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const res = await fetch("https://easy-buy-black.vercel.app/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="min-h-screen bg-gray-900/10 text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
