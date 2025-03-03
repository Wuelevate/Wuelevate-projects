import React from "react";

const ProductCard = ({ name, price, addToCart }) => {
  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <button
        onClick={addToCart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default ProductCard;
