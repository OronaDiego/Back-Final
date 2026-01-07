import { Router } from "express";
import { generateMockProduct } from "../utils/mock.js";
import { ProductModel } from "../models/product-model.js";
import {
  getProducts,
  createProduct,
  getProductById
} from "../controllers/products-controller.js";

const router = Router();

router.get("/performance", async (req, res) => {
  const start = Date.now();
  
  const products = await ProductModel.find();
  
  const end = Date.now();
  
  res.json({
    total: products.length,
    timeMs: end - start
  });
});


// 🔹 MOCKING
router.get("/mock", (req, res) => {
  const products = Array.from({ length: 10 }, generateMockProduct);
  res.json(products);
});

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);

export default router;
