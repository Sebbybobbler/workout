import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ hello: "it's me" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}.`);
});
