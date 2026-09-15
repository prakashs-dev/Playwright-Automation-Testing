import { expect, test } from "@playwright/test";
import mysql from "mysql2/promise";

test("DB TEST", async () => {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "prakash",
    database: "newdb", // databbase name
  });

  connection.connect((error) => {
    if (error) {
      console.log("Connection Error");
      return;
    }
  }, console.log("MySQL connected successfully!"));

  const [rows] = await connection.query(
    "SELECT * FROM employees ORDER BY employee_id ASC LIMIT 10",
  );

  console.log("Employee data:", rows);

  // expect(rows).toHaveLength(rows.length);
  // console.log("Totally 10 records", rows.length);

  await connection.end();
});
