import { Router } from "express";
import { methods as productController } from "../controllers/product.controller";

const router = Router();

router.get("/", productController.getProducts);

export default router;