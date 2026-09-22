import { test, expect } from "@playwright/test";
import { connectDB, closeDB } from "../utils/mongodb.js";

test("Verify trainsys collection", async () => {
  const db = await connectDB();

  const trainsys = db.collection("trainsys");

  const train = await trainsys.findOne({});

  console.log("Train data:", train);

  await expect(train).not.toBeNull();

  await closeDB();
});
