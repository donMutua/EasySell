import express from "express";
import { PrismaClient } from "@prisma/client";
import config from "config";

const port = config.get<number>("port");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.post("/product", async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: "New Product 2",
      price: 10,
    },
  });
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}}`);
});
