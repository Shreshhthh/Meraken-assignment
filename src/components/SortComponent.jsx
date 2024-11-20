import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const SortComponent = () => {
  const { setSort } = useContext(StoreContext);
  return (
    <select
      className="p-2 border rounded-lg cursor-pointer"
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="popularity">Popularity</option>
      <option value="name">Sort by Name</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
};

export default SortComponent;
