import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js";
import config from "./config.js";
import cors from "cors";

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// Routes
app.use("/api/products", productRoutes);

export default app;