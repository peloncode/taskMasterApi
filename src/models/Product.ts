import { Schema, model, Document } from "mongoose";

// Interface para TypeScript
export interface IProduct extends Document {
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
  fechaCreacion: Date;
}

// Esquema para Mongoose
const productSchema = new Schema<IProduct>({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  precio: { type: Number, required: [true, "El precio es obligatorio"] },
  stock: { type: Number, default: 0 },
  categoria: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
});

export default model<IProduct>("Product", productSchema);
