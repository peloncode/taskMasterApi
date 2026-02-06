import { useEffect, useState } from "react";
import * as api from "../services/productService";
import { Edit3, Plus, X, PackageOpen, Loader2, Trash2 } from "lucide-react";
import InventoryFilters from "../components/InventoryFilters";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);

  const [formData, setFormData] = useState({
    modelo: "",
    precio: "" as string | number,
    stock: "" as string | number,
    categoria: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await api.getProducts();
      setProducts(data);
      const uniqueCats: string[] = Array.from(
        new Set(data.map((p: any) => p.categoria)),
      );
      setCategories(uniqueCats);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.modelo
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || p.categoria === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
    };

    try {
      if (editingId) {
        await api.updateProduct(editingId, dataToSend);
      } else {
        await api.createProduct(dataToSend);
      }
      setIsModalOpen(false);
      resetForm();
      loadProducts();
    } catch (err) {
      alert("Error al guardar");
    }
  };

  const openDeleteConfirm = (product: any) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      try {
        await api.deleteProduct(productToDelete._id);
        loadProducts();
      } catch (err) {
        alert("Error al eliminar");
      } finally {
        setIsDeleteModalOpen(false);
        setProductToDelete(null);
      }
    }
  };

  const openEdit = (product: any) => {
    setFormData({
      modelo: product.modelo,
      precio: product.precio,
      stock: product.stock,
      categoria: product.categoria,
    });
    setEditingId(product._id);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({ modelo: "", precio: "", stock: "", categoria: "" });
    setEditingId(null);
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Sistema de Inventario
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            CRUD en vivo conectado a{" "}
            <span className="text-[#00ED64] font-mono">MongoDB Atlas</span>
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="w-full sm:w-auto bg-[#00ED64] hover:bg-[#00c855] text-[#050505] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,237,100,0.2)]"
        >
          <Plus size={20} /> Añadir Producto
        </button>
      </div>

      <InventoryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="animate-spin text-[#00ED64]" size={40} />
        </div>
      ) : (
        <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl overflow-hidden">
          {/* Contenedor con Scroll Horizontal para la tabla */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-slate-900/50 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
                <tr>
                  <th className="p-6">Modelo</th>
                  <th className="p-6">Categoria</th>
                  <th className="p-6">Precio</th>
                  <th className="p-6">Stock</th>
                  <th className="p-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredProducts.map((p) => (
                  <tr
                    key={p._id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="p-6 font-medium text-white">{p.modelo}</td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300">
                        {p.categoria}
                      </span>
                    </td>
                    <td className="p-6 text-[#00ED64] font-mono">
                      ${p.precio}
                    </td>
                    <td className="p-6 text-slate-400">{p.stock} units</td>
                    <td className="p-6 text-right space-x-3">
                      <button
                        onClick={() => openEdit(p)}
                        className="text-slate-500 hover:text-[#3178C6] transition-colors inline-block"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => openDeleteConfirm(p)}
                        className="text-slate-500 hover:text-red-500 transition-colors inline-block"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="p-20 text-center text-slate-600 flex flex-col items-center gap-4">
              <PackageOpen size={48} />
              <p>No hay productos que coincidan con la búsqueda.</p>
            </div>
          )}
        </div>
      )}

      {/* Modal Form Responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0a] border border-slate-800 w-full max-w-md rounded-3xl p-6 md:p-8 shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingId ? "Edit Product" : "New Product"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-white p-1"
              >
                <X />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                  modelo
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-[#00ED64] outline-none transition-colors"
                  value={formData.modelo}
                  onChange={(e) =>
                    setFormData({ ...formData, modelo: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                    Precio ($)
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-[#00ED64] outline-none transition-colors"
                    value={formData.precio}
                    onChange={(e) =>
                      setFormData({ ...formData, precio: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                    Stock
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-[#00ED64] outline-none transition-colors"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({ ...formData, stock: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                  Categoria
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-[#00ED64] outline-none transition-colors"
                  value={formData.categoria}
                  onChange={(e) =>
                    setFormData({ ...formData, categoria: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3178C6] hover:bg-[#2a66a8] text-white font-bold py-4 rounded-xl mt-4 transition-all active:scale-95"
              >
                {editingId ? "Guardar Cambios" : "Crear Producto"}
              </button>
            </form>
          </div>
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={productToDelete?.modelo || ""}
      />
    </div>
  );
};

export default Products;
