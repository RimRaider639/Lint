import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import RegisterPage from "../components/RegisterPage";
import Signin from "../components/Singin";
import ProductsPage from "../pages/productsPage";
import SingleProductPage from "../pages/singleProductPage";
import Cart from "../pages/cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/products/:path/:category?/:sub-Category?brand=:brandQuery?"
        element={<ProductsPage />}
      />
      <Route  path="/signin"  element={<Signin />} />
      <Route  path="/register"  element={<RegisterPage />} />
      {/* <Route
        path="/products/:path/:category/:sub-Category"
        element={<ProductsPage />}
      /> */}
      <Route path="/single" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/products/:path/:category/:id"
        element={<SingleProductPage />}
      />
    </Routes>
  );
};

export default AllRoutes;
