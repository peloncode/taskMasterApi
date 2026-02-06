import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  modelo: string;
  precio: number;
  stock: number;
  categoria: string;
  fechaCreacion: Date;
}

const productSchema = new Schema<IProduct>({
  modelo: {
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
