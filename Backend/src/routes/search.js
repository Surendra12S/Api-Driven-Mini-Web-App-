import express from "express";
import axios from "axios";
import Repo from "../models/Repo.js"; // Mongoose model

const router = express.Router();

// backend/src/routes/search.js
router.get("/search", async (req, res) => {
  const { keyword, page = 1, limit = 6 } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const response = await axios.get("https://api.github.com/search/repositories", {
      params: {
        q: keyword,
        page,
        per_page: limit
      },
      headers: { "User-Agent": "request" } // GitHub API requires a User-Agent
    });

    const repos = response.data.items.map(repo => ({
      name: repo.name,
      fullName: repo.full_name,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      owner: repo.owner.login,
      description: repo.description || "No description available"
    }));

    // Optional: save in DB (avoid duplicates with upsert)
    if (repos.length > 0) {
      await Repo.insertMany(repos, { ordered: false }).catch(() => {});
    }

    res.json({
      items: repos,
      page: Number(page),
      totalPages: Math.ceil(response.data.total_count / limit) // ✅ pagination info
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch repositories" });
  }
});

export default router;
