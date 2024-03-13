import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

//mock database for products
const products = [
  {
    product_name: "T-Shirts",
    category: "Tops",
    quantity: "2",
  },
  {
    product_name: "Sandles",
    category: "Footwear",
    quantity: "5",
  },
];

router.get("/products", (req, res) => {
  res.send(products);
});
