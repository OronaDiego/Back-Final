import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./routes/user-routes.js";
import productsRouter from "./routes/products-routes.js";
import { loggerMiddleware } from "./middlewares/logger-middleware.js";
import { swaggerSetup } from "./config/swagger.js";
import { errorHandler } from "./middlewares/error-middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(loggerMiddleware);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send("API Backend Final funcionando");
});

swaggerSetup(app);


app.use(errorHandler);

export default app;
