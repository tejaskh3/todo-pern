import { Client } from "pg";
import * as dotenv from "dotenv";
dotenv.config();
import { createUserTable, createTodosTable } from "./db/tables";
import { createUser, getUser } from "./db/users";
import { createTodo, updateTodo, deleteTodo, getTodos } from "./db/todos";
export const client = new Client({
  connectionString: process.env.DB_STRING,
});

(async function connectDB() {
  try {
    await client.connect();
  } catch (error) {
    console.log("error connecting in database");
  }
})();

// testing user queries
// createUser('test_code_username','test_code_password', 'test_code_name');
// getUser(1).then((data) => console.log(data?.rows));

// testing todos queries
// createTodo(1, "test_code_title", "tet_code_description").then((data) =>
//   console.log(data)
// );
// updateTodo(2, "tet_code_title", "tet_code_description", true).then(
//   (data) => data
// );
// deleteTodo(1).then(data=>console.log(data));
// getTodos(1).then(data=>console.log(data));