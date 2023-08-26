import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopbarComp from "./components/topbar.comp";
import ProductPage from "./pages/product.page";
import DetailProduct from "./components/detail-product.comp";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopbarComp />}>
              <Route index element={<ProductPage />} />
              <Route path="detail-product/:id" element={<DetailProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
