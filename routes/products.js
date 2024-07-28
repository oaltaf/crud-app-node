import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

//mock database for products
const products = [
  {
    id: 1,
    product_name: "T-Shirts",
    category: "Tops",
    quantity: "2",
  },
  {
    id: 2,
    product_name: "Sandles",
    category: "Footwear",
    quantity: "5",
  },
  {
    id: 3,
    product_name: "Joggers",
    category: "Footwear",
    quantity: "10",
  },
];

router.get("/", (req, res) => {
  res.send(products);
});

// Get product by id
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// POST endpoint to add a new product
router.post("/products", (req, res) => {
  const { product_name, price } = req.body;

  if (!product_name || !price) {
    return res.status(400).send("Name and price are required");
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    product_name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default router;
