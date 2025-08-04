import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../public/Home';
import Contact from '../public/Contact';
import About from '../public/About';
import Navbar from '../public/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [NoofItems, setNoOfItems] = useState(0);

  const addToCart = (shoe) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...shoe, quantity: 1 }];
      }
    });
    setTotalPrice((prev) => prev + shoe.price);
    setNoOfItems((prev) => prev + 1);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    const shoe = cartItems.find((item) => item.id === id);
    if (shoe) {
      setTotalPrice((prev) => prev + shoe.price);
      setNoOfItems((prev) => prev + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const shoe = cartItems.find((item) => item.id === id);
    if (!shoe) return;

    if (shoe.quantity === 1) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }

    setTotalPrice((prev) => prev - shoe.price);
    setNoOfItems((prev) => prev - 1);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              totalPrice={totalPrice}
              NoofItems={NoofItems}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
