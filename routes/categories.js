import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

//mock database for products
const categories = [
  {
    id: 1,
    category: "Tops",
  },
  {
    id: 2,
    category: "Footwear",
  },
  {
    id: 3,
    category: "Accessories",
  },
];

router.get("/", (req, res) => {
  res.send(categories);
});


export default router;