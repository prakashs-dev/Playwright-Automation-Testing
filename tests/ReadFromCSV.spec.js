import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";

const records = parse(
  fs.readFileSync(path.join(__dirname, "../test_data/input.csv")),
  {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true,
  }
);

for (const record of records) {
  test(`Execution ID : ${record.ID}`, async () => {
    console.log("Record ", record.ID, record.Name, record.Age);
  });
}
