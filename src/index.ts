import { Client } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

export const client = new Client({
  connectionString: process.env.DB_STRING,
});

