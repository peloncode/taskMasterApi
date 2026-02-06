import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productRoutes from "./routes/productRoutes"; // <--- Importante

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes); // <--- Aquí activas el CRUD

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API Funcionando" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
