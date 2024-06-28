import express from "express";
import "dotenv/config";
import cors from "cors";
import exercises from "./src/server/exercises.js";
import sessions from "./src/server/sessions.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 3001;
const app = express();

const router = express.Router();
app.use(express.json());
app.use(cors());
router.use("/exercises", exercises);
router.use("/sessions",sessions);
app.use(router);
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}.`);
});
