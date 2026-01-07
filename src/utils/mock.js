import { faker } from "@faker-js/faker";

export const generateMockProduct = () => ({
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: Number(faker.commerce.price()),
  stock: faker.number.int({ min: 1, max: 100 })
});

