import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import RegisterPage from "../components/RegisterPage";
import Signin from "../components/Singin";
import ProductsPage from "../pages/productsPage";
import SingleProductPage from "../pages/singleProductPage";
import Cart from "../pages/cart";
import ProductNotFound from "../components/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route  path="/signin"  element={<Signin />} />
      <Route  path="/register"  element={<RegisterPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/products/:path/:category?/:sub_category?/:brand"
        element={<ProductsPage />}
      />
      <Route
        path="/products/:path/:category?/:sub_category?/:id/single"
        element={<SingleProductPage />}
      />
      <Route component={ProductNotFound} />
    </Routes>
  );
};

export default AllRoutes;
