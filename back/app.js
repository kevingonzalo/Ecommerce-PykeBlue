import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import register from "./post/register.js";
import login from "./post/login.js";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Servidor encendido!");
});

app.post("/register", register);
app.post("/login", login);
app.listen(PORT, () => {
  console.log(`Servidor prendido en puerto: ${PORT}`);
});
