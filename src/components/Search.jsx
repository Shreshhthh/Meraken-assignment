import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const { searchtext, setSearchText } = useContext(StoreContext);
  return (
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;
