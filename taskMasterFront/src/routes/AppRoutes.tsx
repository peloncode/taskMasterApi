import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Backend from "../pages/Backend";
import Deploy from "../pages/Deploy";
import Products from "../pages/Products";
import Welcome from "../pages/Welcome";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        {" "}
        {/* El Layout va AQUÍ, dentro del Router */}
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/inventory" element={<Backend />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
