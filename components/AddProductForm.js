"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
    rating: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          image: "",
          stock: "",
          rating: "",
        });
      } else {
        toast.error("❌ Failed to add product. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-xl p-6 space-y-6 text-white">
      <h2 className="text-2xl font-bold text-white ">Add New Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
            placeholder="e.g. Cameras"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 textarea textarea-bordered w-full bg-gray-800 text-white border-gray-700"
          rows="3"
          placeholder="Write a short description..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
            placeholder="650"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
            placeholder="6"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Rating
          </label>
          <input
            type="number"
            step="0.1"
            max="5"
            min="0"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
            placeholder="4.7"
            required
          />
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 input input-bordered w-full bg-gray-800 text-white border-gray-700"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      {/* Preview Image */}
      {formData.image && (
        <div className="flex justify-center">
          <img
            src={formData.image}
            alt="Preview"
            className="h-40 w-40 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn btn-primary text-white text-lg flex items-center justify-center">
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Add Product"
        )}
      </button>
    </form>
  );
}
