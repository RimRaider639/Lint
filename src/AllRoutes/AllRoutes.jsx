import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import RegisterPage from "../components/RegisterPage";
import Signin from "../components/Singin";
import ProductsPage from "../pages/productsPage";
import SingleProductPage from "../pages/singleProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:path" element={<ProductsPage />} />
      <Route path="/single" element={<SingleProductPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default AllRoutes;
