import { client } from "../index";
export async function createUserTable() {
  try {
    const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
    );
`);
    console.log(result);
  } catch (error) {
    console.log("error creating un user table", error);
  }
}

export async function createTodosTable() {
  try {
    const result = await client.query(`
          CREATE TABLE IF NOT EXISTS todos (
              id SERIAL PRIMARY KEY,
              user_id INTEGER NOT NULL REFERENCES users(id),
              title VARCHAR(255) NOT NULL,
              description TEXT,
              done BOOLEAN DEFAULT false
          );
      `);
    console.log(result);
  } catch (error) {
    console.log("error creating in todo table", error);
  }
}
export async function dropTables(tableName: string) {
  try {
    if (tableName === "todos")
      await client.query(`DROP TABLE IF EXISTS todos;`);
    else await client.query(`DROP TABLE IF EXISTS users;`);
  } catch (error) {
    console.log(`error deleting in ${tableName} table.`, error);
  }
}

module.exports = { createUserTable, createTodosTable, dropTables };
