import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from '../pages/productsPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/products" element={<ProductsPage />} />
        </Routes>
    )
}

export default AllRoutes