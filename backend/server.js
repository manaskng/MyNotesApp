import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";   // ✅ add this

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

// ✅ Enable CORS
app.use(cors({
  origin: [
    "http://localhost:5173",               // for local dev
    "https://my-nano-notesf.vercel.app"     // replace with actual vercel link
  ],
  credentials: true
}));

// DB Connection
connect();

// Routes
app.use("/api/users", authRoutes);
app.use("/api/notes", notesRoutes);

// // Serve frontend in production (optional since frontend is on Vercel)
// if (process.env.NODE_ENV === "production") {
//   const frontendDist = path.join(__dirname, "../frontend/dist");
//   app.use(express.static(frontendDist));
//   app.get("/*splat", (req, res) =>
//     res.sendFile(path.resolve(frontendDist, "index.html"))
//   );
// }

// Start server
app.listen(PORT, () => {
  console.log(`Server connected at port: ${PORT}`);
});
