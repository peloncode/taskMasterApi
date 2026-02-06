import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Database, Cloud, Package, Zap } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Bienvenido",
      path: "/welcome",
      icon: <LayoutDashboard size={20} />,
      activeColor: "text-[#A259FF]",
    },
    {
      name: "Inventario",
      path: "/products",
      icon: <Package size={20} />,
      activeColor: "text-[#00ED64]",
    },
    {
      name: "Logica",
      path: "/inventory",
      icon: <Database size={20} />,
      activeColor: "text-[#3178C6]",
    },
    {
      name: "Despliegue",
      path: "/deploy",
      icon: <Cloud size={20} />,
      activeColor: "text-[#FBBC04]",
    },
  ];

  return (
    // Se mantiene w-64 y fixed. El Layout se encarga de mostrarlo/ocultarlo en móvil.
    <aside className="w-64 border-r border-slate-800 bg-[#050505] p-6 flex flex-col h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-[#3178C6] p-2 rounded-lg shadow-[0_0_15px_rgba(49,120,198,0.3)]">
          <Zap size={24} className="text-white fill-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          TaskMaster
        </span>
      </div>

      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 transition-all duration-300 group ${
              location.pathname === item.path
                ? `text-white border-l-2 border-[#3178C6] bg-[#3178C6]/5`
                : `text-slate-500 hover:text-white`
            }`}
          >
            <span
              className={
                location.pathname === item.path
                  ? item.activeColor
                  : "group-hover:text-white"
              }
            >
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Indicadores de Tecnología en el Footer del Sidebar */}
      <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
          <div className="w-2 h-2 rounded-full bg-[#EA4335]" /> Google Cloud
          Engine
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
          <div className="w-2 h-2 rounded-full bg-[#00ED64]" /> MongoDB Atlas
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
