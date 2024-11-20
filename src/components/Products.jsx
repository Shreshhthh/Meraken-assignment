import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import LoaderComponent from "./Loader";

import { StoreContext } from "../context/StoreContext";

const Products = () => {
  const { products, isLoading } = useContext(StoreContext);

  return isLoading ? (
    <LoaderComponent />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
