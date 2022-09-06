// Components
import { ProductItem } from "../components/ProductItem";

// Hooks
import { useProducts } from "../hooks/useProducts";

// React Router Dom
import { useLocation } from "react-router-dom";

// Styles
import "./styles.css";

export function Cart() {
  const { pathname } = useLocation();

  const {
    data: productItem,
    total,
    firstTotalCart,
  } = useProducts(pathname === "/" ? "above" : "below");

  return (
    <main>
      <section className="cart">
        <div className="content">
          <h1 className="title">Meu Carrinho</h1>
        </div>
        <div className="line"></div>

        <div className="content">
          {productItem?.map((item) => (
            <ProductItem
              key={item.id}
              product={{
                id: item.id,
                imageUrl: item.imageUrl,
                name: item.name,
                price: (item.price / 100) * item.quantity,
                sellingPrice: (item.sellingPrice / 100) * item.quantity,
                quantity: item.quantity,
              }}
              type={pathname === "/" ? "above" : "below"}
            />
          ))}
        </div>

        <div className="line"></div>

        <div className="content">
          <div className="totalPriceWrapper">
            <h3>Total</h3>
            <h3>
              {total === 0
                ? new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(firstTotalCart / 100)
                : new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
            </h3>
          </div>

          {total !== 0 && total > 10 && (
            <div className="alertFreeFrete">
              <span>Parabéns, sua compra tem frete grátis !</span>
            </div>
          )}

          {total === 0 && firstTotalCart / 100 > 10 && (
            <div className="alertFreeFrete">
              <span>Parabéns, sua compra tem frete grátis !</span>
            </div>
          )}
        </div>

        <div className="line"></div>
        <div className="content">
          <button className="finalizePurchase">Finalizar compra</button>
        </div>
      </section>
    </main>
  );
}
