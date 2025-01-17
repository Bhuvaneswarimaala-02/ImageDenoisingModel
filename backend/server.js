// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for image uploads
const upload = multer({
  dest: "uploads/", // Folder where the image will be stored temporarily
});

// Basic API Route
app.get("/", (req, res) => {
  res.send("Welcome to the Enhanced Image Denoising API");
});

// Image Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }
  // Process the uploaded file (e.g., denoise, enhance)
  res.send(`File uploaded successfully: ${file.originalname}`);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
