import { client } from "../index";

export async function createTodo(
  user_id: number,
  title: string,
  description: string
) {
  const queryText =
    "INSERT INTO todos(user_id,title,description) VALUES($1, $2, $3)";
  const values = [user_id, title, description];
  try {
    const result = client.query(queryText, values);
    console.log(result);
    return result;
  } catch (error) {
    console.log("error creating in todos", error);
  }
}

export async function updateTodo(
  id: number,
  title: string,
  description: string,
  done: boolean
) {
  const queryText =
    "UPDATE todos SET title = $1, description = $2, done = $3 WHERE id = $4";
  const values = [title, description, done, id];
  try {
    const result = await client.query(queryText, values);
    console.log(result);
    return result;
  } catch (error) {
    console.log("error updating todo", error);
  }
}

export async function deleteTodo(id: number) {
  try {
    const result = client.query(`DELETE FROM todos where id = ${id}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log("error deleting in todo", error);
  }
}

export async function getTodos(user_id: number) {
  try {
    const result = client.query(
      `SELECT * FROM todos WHERE user_id = ${user_id}`
    );
    console.log(result);
    return result;
  } catch (error) {}
}
