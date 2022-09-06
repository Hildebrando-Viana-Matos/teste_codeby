// React
import { createContext, ReactNode, useState } from "react";

// Types
import { Product } from "../types";

interface ProductsProviderProps {
  children: ReactNode;
}

interface UpdateProductQuantityFromCart {
  productId: string;
  quantity: number;
}

interface ProductContextData {
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  firstTotalCart: number;
  handleRemoveProductFromCart: (productId: string) => void;
  handleUpdateProductQuantityFromCart: ({
    productId,
    quantity,
  }: UpdateProductQuantityFromCart) => void;
}

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export function ProductsProvider({
  children,
}: ProductsProviderProps): JSX.Element {
  const [data, setData] = useState<Product[]>([]);

  const firstTotalCart = data.reduce((sumTotal, product) => {
    return sumTotal + product.sellingPrice;
  }, 0);

  const [total, setTotal] = useState(0);

  function updateTotalCart() {
    const totalCart = data.reduce((sumTotal, product) => {
      return sumTotal + product.sellingPrice * product.quantity;
    }, 0);

    setTotal(totalCart / 100);
  }

  function handleRemoveProductFromCart(productId: string) {
    try {
      const newProductsFromCart = [...data];
      const findingProduct = newProductsFromCart.findIndex(
        (product) => product.id === productId
      );

      if (findingProduct >= 0) {
        newProductsFromCart.splice(findingProduct, 1);
        setData(newProductsFromCart);
      } else {
        throw Error();
      }
    } catch {
      alert("Error ao remover o carrinho");
    }
  }

  async function handleUpdateProductQuantityFromCart({
    productId,
    quantity,
  }: UpdateProductQuantityFromCart) {
    try {
      const newProductsFromCart = [...data];
      const productExists = newProductsFromCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.quantity = quantity;

        updateTotalCart();

        setData(newProductsFromCart);
      } else {
        throw Error();
      }
    } catch {
      alert("Não foi possível atualizar a quantidade do produto no carrinho");
    }
  }

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        total,
        firstTotalCart,
        handleRemoveProductFromCart,
        handleUpdateProductQuantityFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
