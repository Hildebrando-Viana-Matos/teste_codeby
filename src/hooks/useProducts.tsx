// React
import { useContext, useEffect } from "react";

// Context
import { ProductContext } from "../context/ProductContext";

// Api
import { apiAbove10, apiBelow10 } from "../services/api";

export function useProducts(apiType: "above" | "below") {
  const context = useContext(ProductContext);

  useEffect(() => {
    if (apiType === "above") {
      apiAbove10.get("").then((response) => {
        context.setData(response.data.items);
      });
    } else {
      apiBelow10.get("").then((response) => {
        context.setData(response.data.items);
      });
    }
  }, []);

  return context;
}
