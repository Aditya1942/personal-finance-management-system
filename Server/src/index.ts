import express, { Application } from "express";
import router from "./routes";
import cors from "cors";
import path from "path";

/********************************************* config *********************************************/
const PORT = process.env.PORT || 5000;
const app: Application = express();
app.use(cors());

app.use(express.json()); // To parse the incoming requests with JSON payloads
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.send(`Server started on port ${PORT}`);
});
app.use("/api", router);
app.use(express.static(path.resolve(__dirname, "../public/")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/"));
});
