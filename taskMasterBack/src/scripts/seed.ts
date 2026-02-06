// taskMasterBack/src/scripts/seed.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product"; // Sin llaves porque es export default

dotenv.config();

const initialProducts = [
  {
    modelo: "DELL LATITUDE 3500", // Cambiado de 'nombre' a 'modelo'
    precio: 410,
    stock: 25,
    categoria: "Laptops",
  },
  {
    modelo: "JEMIP HYPERION 2.0",
    precio: 300,
    stock: 50,
    categoria: "Cpus",
  },
  {
    modelo: "HP PRODESK 600 G3",
    precio: 270,
    stock: 10,
    categoria: "Cpus",
  },
];

const seedDB = async () => {
  try {
    // Asegúrate de que tu .env tenga el MONGO_URI
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Conectado a MongoDB Atlas... 🚀");

    // Limpia la colección para evitar duplicados
    await Product.deleteMany({});
    console.log("Colección limpiada.");

    // Inserta los productos iniciales
    await Product.insertMany(initialProducts);

    console.log("¡Base de datos poblada con éxito! ✅");
    process.exit(0);
  } catch (error) {
    console.error("Error al sembrar la base de datos: ❌", error);
    process.exit(1);
  }
};

seedDB();
