import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Layout } from "./components/Layout/Layout";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<AboutUsPage />} path={RoutePath.AboutUsPage} />
          <Route element={<ProductPage />} path={RoutePath.ProductPage} />
          <Route element={<CatalogPage />} path={RoutePath.CatalogPage} />
          <Route element={<MainPage />} path="*" />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
