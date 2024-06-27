import express from "express";
import pool from "../db.js";
const router = express.Router();

// Get all exercises and info.
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
  const { name, weight, reps, sets } = req.body;
  let date = new Date();

  let result;
  try {
    result = await pool.query(
      "INSERT INTO exercises (name, weight, reps, sets,date) values ($1,$2,$3,$4,$5) RETURNING *;",
      [name, weight, reps, sets, date]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(`DB error occurred when fetching exercise:\n${err}`);
  }
});

// Delete an exercise
router.delete("/:id", async (req,res)=>{
  try{
    const result = await pool.query("DELETE FROM exercises WHERE id=$1",[req.params.id]);
    res.status(204).send("Exercise deleted.");
  }
  catch(err){
    console.log(`There was an error, could not delete exercise. \n ${err}`);
  }
})

export default router;
