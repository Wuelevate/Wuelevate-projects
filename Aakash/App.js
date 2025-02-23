import React, { useState } from 'react'; // Correctly import React and useState
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import Additem from './components/Additem.js';

function App() {
  // Define the initial product list
  const initialProductList = [
    {
      price: 9999,
      name: 'iphone10x max',
      quantity: 0,
    },
    {
      price: 9999,
      name: 'redmi',
      quantity: 0,
    },
  ];

  // Initialize productList and totalAmount with useState
  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to increment quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount; // Create a copy of totalAmount
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price; // Increment the total amount
    setTotalAmount(newTotalAmount); // Update the totalAmount state
    setProductList(newProductList); // Update the productList state
  };

  // Function to decrement quantity
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount; // Create a copy of totalAmount
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price; // Decrement the total amount
    }
    setTotalAmount(newTotalAmount); // Update the totalAmount state
    setProductList(newProductList); // Update the productList state
  };

  // Function to reset quantity
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList = newProductList.map((product) => {
      product.quantity = 0; // Reset quantity to 0 for each product
      return product;
    });
    setProductList(newProductList);
    setTotalAmount(0); // Reset total amount
  };

  // Function to remove an item from the product list
  const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1); // Remove the item at the specified index
    setProductList(newProductList); // Update the product list state
  };

  // Function to add a new item to the product list
  const additem = (name, price) => {
    let newProductList = [...productList]; // Use 'productList' here, not 'productlist'
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList); // Update the product list
  };

  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <Additem additem={additem} />
        {/* Pass incrementQuantity and decrementQuantity as props to ProductList */}
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem} // Pass removeItem here
        />
      </main>
      {/* Pass totalAmount and resetQuantity to Footer */}
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </div>
  );
}

export default App;
