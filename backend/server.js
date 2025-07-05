
import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db.js";
import authRoutes from "./routes/auth.js"
import notesRoutes from './routes/notes.js'
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());//automatically parse json form http request 
// and access req.body in routes



app.use("/api/users",authRoutes);
app.use("/api/notes",notesRoutes)

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}


connect();

app.listen(PORT, () => {
    console.log(`server connected at port :${PORT}`);
});
