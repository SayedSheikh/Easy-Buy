"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Product name"
      />
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}
