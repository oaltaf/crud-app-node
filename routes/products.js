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

export default router;
