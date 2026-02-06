import { Search, Filter } from "lucide-react";

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  filterCategory: string;
  setFilterCategory: (val: string) => void;
  categories: string[];
}

const InventoryFilters = ({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  categories,
}: FiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {/* Input de Búsqueda */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <input
          type="text"
          placeholder="Search by model name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#0a0a0a] border border-slate-800 text-slate-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#3178C6] transition-all placeholder:text-slate-600"
        />
      </div>

      {/* Select de Categoría */}
      <div className="relative w-full md:w-64">
        <Filter
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full bg-[#0a0a0a] border border-slate-800 text-slate-300 text-sm rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[#00ED64]/50 appearance-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InventoryFilters;
