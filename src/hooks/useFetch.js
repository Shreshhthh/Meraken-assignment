import { useEffect } from "react";
import { useState } from "react";

const useFetch = () => {
  const [fetchedArray, setFetchedArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const response = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setFetchedArray(res))
      .then(() => setIsLoading(false));
  }, []);
  return { isLoading, fetchedArray };
};

export default useFetch;
