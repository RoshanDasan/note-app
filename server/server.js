import express from "express";
import { register, login } from "./database/service/authService.js";
import { connectDB } from "./database/connection/connection.js";
import dotenv from "dotenv";
import cors from "cors";
import { verifyToken } from "./middleware/tokenCheck.js";
import {
  setNote,
  removeNote,
  getNotes,
  getNote
} from "./database/service/noteService.js";
const app = express();

connectDB();

dotenv.config();

app.use(cors());

app.use(express.json());

app.post("/api/register", register);

app.post("/api/login", login);

app.post("/api/set_note/:userId", verifyToken, setNote);

app.get("/api/get_notes/:userId", verifyToken, getNotes);

app.get("/api/get_notes/:id", verifyToken, getNote);

app.delete("/api/remove_note/:id", verifyToken, removeNote);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on port ${5000}`);
});
