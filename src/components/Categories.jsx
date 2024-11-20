import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Categories = () => {
  const { categories, handleOnCategoryChange } = useContext(StoreContext);
  return (
    <select
      className="p-2 border rounded-lg cursor-pointer"
      onChange={handleOnCategoryChange}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Categories;
