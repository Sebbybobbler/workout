/* eslint-disable no-undef */
import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


// DB_NAME="workoutapp"
// DB_HOST="localhost"
// DB_PORT=5432
// DB_USER="postgres"
// DB_PASSWORD="postgres"

export default pool;
