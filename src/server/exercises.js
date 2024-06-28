import express from "express";
import pool from "../db.js";
const router = express.Router();

// Get all exercises.
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from exercises;");
    res.json(result.rows);
  } catch (err) {
    console.log(`DB error occurred when fetching exercises:\n${err}`);
  }
});

// Get exercise by Id.
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from exercises WHERE id=$1;", [
      req.params.id,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.log(`DB error occurred when fetching exercise:\n${err}`);
  }
});

// add a new exercise
router.post("/", async (req, res) => {
  const { name } = req.body;

  let result;
  try {
    result = await pool.query(
      "INSERT INTO exercises (name) values ($1) RETURNING *;",
      [name]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(`DB error occurred when fetching exercise:\n${err}`);
  }
});

// Delete an exercise
router.delete("/:id", async (req, res) => {
  try {
    const exerciseExist = await pool.query(
      "SELECT * FROM exercises WHERE id=$1",
      [req.params.id]
    );
    console.log(exerciseExist.rows);
    if (exerciseExist.rows.length != 0) {
      await pool.query("DELETE FROM exercises WHERE id=$1", [req.params.id]);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  } catch (err) {
    console.log(`There was an error, could not delete exercise. \n ${err}`);
  }
});


export default router;
