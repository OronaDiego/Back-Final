import { ProductModel } from "../models/product-model.js";
import { CustomError } from "../utils/customError.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { title, price } = req.body;

    if (!title || !price) {
      throw new CustomError("Title y price son obligatorios", 400);
    }

    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      throw new CustomError("Producto no encontrado", 404);
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

