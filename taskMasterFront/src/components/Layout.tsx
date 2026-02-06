import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-slate-200">
      {/* Sidebar con lógica responsive */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar />
      </div>

      {/* Botón para abrir Sidebar en móvil */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-[60] p-2 bg-slate-900 border border-slate-800 rounded-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar el menú al tocar fuera en móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Contenedor principal: 
          - lg:ml-0 si el Sidebar es static, o mantenemos la estructura flex.
      */}
      <div className="flex-1 w-full min-h-screen flex flex-col">
        {/* Contenedor de contenido:
            - py-10 para dar aire arriba y abajo.
            - px-8 para márgenes laterales.
        */}
        <main className="max-w-7xl mx-auto w-full p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
