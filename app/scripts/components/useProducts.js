import { useEffect, useState } from "react";
import axios from "axios";

const API_ENDPOINT = "http://localhost:3035";

export const useProducts = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => fetchProducts(), [query]);

  const fetchProducts = () => {
    setIsLoading(true);
    axios
      .get(API_ENDPOINT, {
        params: { query },
      })
      .then((res) => {
        if (res.status !== 200) {
          // TODO: handle response if status code is not 200
          return;
        }
        setIsLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        // TODO: API exception handler, e.g: show error modal dialog
        console.error("API error: ", err.toString());
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    products,
    fetchProducts,
  };
};
