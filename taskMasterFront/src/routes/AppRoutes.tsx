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
        <Routes>
          {/* 1. Ruta raíz que renderiza Welcome de entrada */}
          <Route path="/" element={<Welcome />} />

          {/* 2. Tus rutas existentes */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/inventory" element={<Backend />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/products" element={<Products />} />

          {/* 3. Corrección: Si el usuario escribe una ruta que no existe, 
              lo mandamos a /welcome en lugar de /dashboard (que aún no existe) */}
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
