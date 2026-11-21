
import React from "react";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition w-[350px] ">

      {/* Product Image */}
      <div className="relative bg-gray-50 p-4">
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {Math.round(product.discountPercentage)}% OFF
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">

        <p className="text-xs text-gray-500 uppercase">
          {product.brand} · {product.category}
        </p>

        <h2 className="font-semibold text-gray-800 text-lg line-clamp-1">
          {product.title}
        </h2>

        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>
          <span>{product.rating}</span>
          <span className="text-gray-400">
            ({product.reviews.length} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        {/* Stock */}
        <p className={`text-sm ${
          product.stock > 0
            ? "text-green-600"
            : "text-red-500"
        }`}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button
          disabled={product.stock === 0}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
