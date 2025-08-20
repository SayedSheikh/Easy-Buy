export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="text-3xl mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((p) => (
          <div key={p._id} className="card bg-base-200 p-4">
            <h2 className="text-xl">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <a className="btn btn-sm mt-2" href={`/products/${p._id}`}>
              Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
