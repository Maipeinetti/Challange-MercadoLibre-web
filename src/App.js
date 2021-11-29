import React from "react";
import { Route, Routes } from "react-router-dom";
import "./sass/app.scss";
import ProductList from "./pages/product-list/ProductList";
import OneProduct from "./pages/product-detail/OneProduct";
import Product from ".//pages/product-home/Product";
import NotFound404 from "./pages/not-found/NotFound404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Product></Product>}></Route>
        <Route exact path="items" element={<ProductList></ProductList>} />
        <Route path="items/:id" element={<OneProduct></OneProduct>} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
