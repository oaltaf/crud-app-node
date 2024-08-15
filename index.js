import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import prodRoutes from "./routes/products.js";
import prodCategories from "./routes/categories.js"

const app = express();
const PORT = 5500;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/products", prodRoutes);
app.use("/categories", prodCategories);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("Hi From HomePage");
});

// app.get("/", (req, res));

// app.get("/users", (req, res) => {
//   console.log("[GET ROUTE]");
//   res.send("List of Users");
// });

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
