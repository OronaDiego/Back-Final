import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("Testing Mock Products", () => {
  it("GET /api/products/mock debe devolver 10 productos", async () => {
    const res = await request(app).get("/api/products/mock");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.equal(10);
  });
});
