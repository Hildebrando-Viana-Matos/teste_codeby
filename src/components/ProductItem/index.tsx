// React
import { FormEvent, useState } from "react";

// Hooks
import { useProducts } from "../../hooks/useProducts";

// Icons
import { FiTrash2 } from "react-icons/fi";

// Types
import { Product } from "../../types";

// Styles
import "./styles.css";

interface ProductItemProps {
  product: Product;
  type: "above" | "below";
}

export function ProductItem({ product, type }: ProductItemProps) {
  const [valueInputNumeric, setValueInputNumeric] = useState(1);

  const { handleRemoveProductFromCart, handleUpdateProductQuantityFromCart } =
    useProducts(type);

  function handleProductIncrement(event: FormEvent<HTMLInputElement>) {
    setValueInputNumeric(Number(event.currentTarget.value));

    handleUpdateProductQuantityFromCart({
      productId: product.id,
      quantity: Number(event.currentTarget.value),
    });
  }

  return (
    <div className="item">
      <div className="dataItem">
        <img src={product.imageUrl} alt={product.name} className="imageItem" />
        <div className="itemInformation">
          <h2 className="itemName">{product.name}</h2>

          <p className="totalPrice">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>
          <p className="promotionPrice">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.sellingPrice)}
          </p>
        </div>
      </div>
      <div className="actions">
        <button
          className="removeItem"
          onClick={() => handleRemoveProductFromCart(product.id)}
        >
          <FiTrash2 size={24} />
        </button>
        <input
          type="number"
          min={1}
          defaultValue={1}
          value={valueInputNumeric}
          onChange={(event) => handleProductIncrement(event)}
        />
      </div>
    </div>
  );
}
