import { Router } from "express";
import { methods as productController } from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts);

router.get("/categories", productController.getCategories);

router.get("/search", productController.searchProducts);

router.get("/:id", productController.getByCategoryProducts);

export default router;