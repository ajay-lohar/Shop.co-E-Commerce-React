import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import "./App.css";
import "./style.css";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-page/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;