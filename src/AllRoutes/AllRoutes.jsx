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
      <Route path="/products/:path" element={<ProductsPage />} />
<<<<<<< HEAD
      <Route path="/single" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cart/>}/>
=======
      <Route path="/product/:id" element={<SingleProductPage />} />
>>>>>>> 93d21bbbcbf487d1b5aeb78c36bf2ebe2b9b1458
    </Routes>
  );
};

export default AllRoutes;
