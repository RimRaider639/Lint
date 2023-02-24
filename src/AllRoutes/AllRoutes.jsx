import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProductsPage from "../pages/productsPage";
import SingleProductPage from "../pages/singleProductPage";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:path" element={<ProductsPage />} />
      <Route path="/single" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
};

export default AllRoutes;
