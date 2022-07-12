import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js";
import config from "./config.js";

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

export default app;