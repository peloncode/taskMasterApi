import { AlertTriangle, X } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="bg-[#0a0a0a] border border-red-900/20 w-full max-w-sm rounded-3xl p-8 relative animate-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="text-red-500" size={32} />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Are you sure?
        </h2>
        <p className="text-slate-400 text-center mb-8 text-sm leading-relaxed">
          You are about to delete{" "}
          <span className="text-white font-bold italic">"{itemName}"</span>.
          This will be permanently removed from MongoDB Atlas.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onClose}
            className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-3 px-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-600/20"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
