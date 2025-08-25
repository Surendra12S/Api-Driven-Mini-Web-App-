import mongoose from "mongoose";

const repoSchema = new mongoose.Schema({
  name: String,
  fullName: String,
  url: String,
  stars: Number,
}, { timestamps: true });

const Repo = mongoose.model("Repo", repoSchema);

export default Repo;
