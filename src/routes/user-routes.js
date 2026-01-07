import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById
} from "../controllers/users-controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

// 🔹 MOCKING
router.get("/mock", (req, res) => {
  const products = Array.from({ length: 10 }, generateMockProduct);
  res.json(products);
});

router.get("/:id", getUserById);

export default router;
