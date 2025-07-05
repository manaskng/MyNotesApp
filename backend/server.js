import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { connect } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

// ES Module equivalent of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// DB Connection
connect();

// Routes
app.use("/api/users", authRoutes);
app.use("/api/notes", notesRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const frontendDist = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendDist));

  // Use splat wildcard to avoid path-to-regexp error
  app.get("/*splat", (req, res) =>
    res.sendFile(path.resolve(frontendDist, "index.html"))
  );
}

// Start server
app.listen(PORT, () => {
  console.log(`Server connected at port: ${PORT}`);
});