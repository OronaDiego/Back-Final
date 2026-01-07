import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById
} from "../controllers/products-controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

// 🔹 MOCKING
router.get("/mock", (req, res) => {
  const products = Array.from({ length: 10 }, generateMockProduct);
  res.json(products);
});

router.get("/:id", getProductById);

export default router;
