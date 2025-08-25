import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/search.js";
import cors from "cors"; 

dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());

app.use("/api", router);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
