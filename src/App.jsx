import {React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import "./App.css";
import "./style.css";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const intialState = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [cartItems, setCartItems] = useState(intialState);

  return (
    <>
      <BrowserRouter>
        <Header  cartItems={cartItems} setCartItems={setCartItems}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-page/:productId" element={ <ProductPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="cart-page" element={ <CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;