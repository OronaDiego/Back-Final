import request from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";

import app from "../src/app.js";

describe("Testing API Products", () => {
  before(async () => {
    // Aseguro conexión a Mongo
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URL);
    }
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it("GET /api/products debe devolver un array", async () => {
    const res = await request(app).get("/api/products");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/products debe crear un producto", async () => {
    const productMock = {
      title: "Producto Test",
      description: "Creado desde test",
      price: 1234,
      stock: 10
    };

    const res = await request(app)
      .post("/api/products")
      .send(productMock);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body.title).to.equal(productMock.title);
  });

  it("POST /api/products sin title debe fallar", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ price: 500 });

    expect(res.status).to.equal(400);
    expect(res.body.status).to.equal("error");
  });
});
