import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./routes/user-routes.js";
import productsRouter from "./routes/products-routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);


import { errorHandler } from "./middlewares/error-middleware.js";

app.use(errorHandler);

export default app;
