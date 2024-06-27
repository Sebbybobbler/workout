import express from "express";
import "dotenv/config";
import cors from "cors";
import queries from "./src/server/queries.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 3001;
const app = express();

const router = express.Router();
app.use(express.json());
app.use(cors());
router.use("/exercises", queries);
app.use(router);
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}.`);
});
