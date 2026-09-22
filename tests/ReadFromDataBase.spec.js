import { expect, test } from "@playwright/test";
import mysql from "mysql2/promise";

test("DB TEST", async () => {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "prakash",
    database: "newdb",
  });

  try {
    console.log("MySQL connected successfully!");

    const [rows] = await connection.query(
      "SELECT * FROM EMPLOYEES ORDER BY employee_id ASC LIMIT 3",
    );

    console.log("Employee data:", rows);

    // Verify that 3 records are returned
    expect(rows).toHaveLength(3);

    console.log("Total records returned:", rows.length);
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  } finally {
    await connection.end();
    console.log("MySQL connection closed.");
  }
});
