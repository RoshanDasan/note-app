import express from "express";
import { register, login } from "./database/service/authService.js";
import { connectDB } from "./database/connection/connection.js";
import cors from "cors";
const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.post("/api/register", register);

app.post("/api/login", login);

app.listen(5000, () => {
  console.log(`server started on port ${5000}`);
});
