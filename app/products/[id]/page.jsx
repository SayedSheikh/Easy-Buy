export default async function ProductDetail(props) {
  const { params } = await props;
  const { id } = await params;

  if (!id) {
    return <div>Product ID is required</div>;
  }
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <div>
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
