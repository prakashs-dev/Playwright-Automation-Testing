import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// 1. npm install dotenv
// 2. create file .env 

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, "../test_data/.env") });

test("Read Data from DotEnv file", async ({ page }) => {
  console.log(typeof process.env.url + " = " + process.env.url);
  console.log(
    typeof Boolean(process.env.isAlive) + " = " + process.env.isAlive
  );
  console.log(typeof Number(process.env.age) + " = " + process.env.age);
});
