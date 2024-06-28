import express from "express";
import pool from "../db.js";
const router = express.Router();

//get ALL sessions
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT sessions.id,exercises.name, sessions.weight,sessions.reps,sessions.sets,sessions.date FROM exercises JOIN sessions ON exercises.id = sessions.exercise_id;"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(`DB error occured and couldn't fetch session info \n${err}`);
  }
});

// Record new exercise
router.post("/:id", async (req, res) => {
  let date = new Date();
  const exerciseId = req.params.id;
  const { weight, reps, sets } = req.body;

  let result;
  try {
    const sessionIdQuery = await pool.query("SELECT MAX(id) FROM sessions;");
    let sessionId;
    if (sessionIdQuery.rows[0].max === undefined) {
      sessionId = 1;
    } else {
      sessionId = sessionIdQuery.rows[0].max + 1;
    }

    result = await pool.query(
      "INSERT INTO sessions (id, exercise_id,weight,reps,sets,date) values ($1,$2,$3,$4,$5,$6) RETURNING *;",
      [sessionId, exerciseId, weight, reps, sets, date]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(`DB error occurred when fetching exercise:\n${err}`);
  }
});

export default router;
