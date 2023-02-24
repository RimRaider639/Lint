import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProductsPage from "../pages/productsPage";
import SingleProductPage from "../pages/singleProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:path" element={<ProductsPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
