import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import ProductCard from "./Component/ProductCard";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar cartCount={cartCount} />
      <div className="px-20 flex flex-wrap gap-5 mt-10">
  <ProductCard name="Wireless Headphones" price="₹1999" addToCart={handleAddToCart} />
  <ProductCard name="Smart Watch" price="₹3499" addToCart={handleAddToCart} />
  <ProductCard name="Gaming Mouse" price="₹1299" addToCart={handleAddToCart} />
  <ProductCard name="Mechanical Keyboard" price="₹4999" addToCart={handleAddToCart} />
  <ProductCard name="Bluetooth Speaker" price="₹2499" addToCart={handleAddToCart} />
  <ProductCard name="USB-C Hub" price="₹999" addToCart={handleAddToCart} />
</div>

    </div>
  );
};

export default App;
