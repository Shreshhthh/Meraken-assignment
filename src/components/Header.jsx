import React, { useContext } from "react";

import { StoreContext } from "../context/StoreContext";
import Search from "./Search";
import Categories from "./Categories";
import SortComponent from "./SortComponent";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="flex flex-wrap items-center gap-4">
        <Search />
        <Categories />
        <SortComponent />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
