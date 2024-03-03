import { client } from "../index";

export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const queryText =
    "INSERT INTO users(username, password, name) VALUES($1, $2, $3)";
  const values = [username, password, name];
  try {
    const result = client.query(queryText, values);
    console.log(result);

    return result;
  } catch (error) {
    console.log("error creating in user", error);
  }
}

export async function getUser(userId: number) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  try {
    const result = client.query(query);
    console.log(result);
    return result;
  } catch (error) {
    console.log("error getting users.", error);
  }
}
