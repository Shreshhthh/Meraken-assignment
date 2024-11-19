import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const { fetchedArray, isLoading } = useFetch();
  const [products, setProducts] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const [itemCategory, setItemCategory] = useState("All");
  const [sort, setSort] = useState("Populaity");
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (id) => {
    setCart([...cart, id]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item !== id));
  };

  const categories = [
    "All",
    ...Array.from(new Set(fetchedArray.map((item) => item.category))),
  ];

  const handleOnCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  useEffect(() => {
    const filteredArray = fetchedArray
      .filter((item) => {
        const matchesSearch = searchtext
          ? item.title.toLowerCase().includes(searchtext.toLowerCase())
          : true;

        const matchesCategory =
          itemCategory === "All" || item.category === itemCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === "name") {
          return a.title.localeCompare(b.title);
        } else if (sort === "price_asc") {
          return a.price - b.price;
        } else if (sort === "price_desc") {
          return b.price - a.price;
        } else {
          return fetchedArray;
        }
      });

    setProducts(filteredArray);
  }, [fetchedArray, searchtext, itemCategory, sort]);

  const contextValue = {
    handleAddtoCart,
    handleRemoveFromCart,
    handleOnCategoryChange,
    categories,
    itemCategory,
    setItemCategory,
    searchtext,
    setSearchText,
    sort,
    setSort,
    cart,
    setCart,
    products,
    setProducts,
    fetchedArray,
    isLoading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
