import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import About from "../pages/About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="products/:id" element={<ProductsDetails />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
