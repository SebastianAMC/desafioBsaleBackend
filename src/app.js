import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js";

const app = express();

// Settings
app.set("port", 8080);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

export default app;