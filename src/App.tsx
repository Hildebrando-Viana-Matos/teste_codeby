// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductContext";

import { Cart } from "./pages/Cart";

export function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/below10" element={<Cart />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}
