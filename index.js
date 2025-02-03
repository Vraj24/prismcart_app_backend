import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
