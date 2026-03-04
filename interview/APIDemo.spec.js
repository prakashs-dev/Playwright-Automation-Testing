import { test, expect } from "@playwright/test";

// test("Get all <a> tags form amazon", async ({ request }) => {
//   const reponse = await request.get("https://fakestoreapi.com/users");
//   expect(reponse.status()).toBe(200);
//   const users = await reponse.json();

//   // 1. Fetch all users from the API.
//   console.log("Total Lenght ", users.length);

//   console.log();
//   // 2. Print the total number of users.
//   users.forEach((user) => {
//     console.log(user.id, user.username);
//   });

//   console.log();
//   // 3. From the list, extract only the users whose id is greater than 5.
//   const filtered = users.filter((user) => user.id > 5);
//   filtered.forEach((u) => {
//     console.log(u.id, u.username);
//   });

//   console.log();

//   // 4. Transform to new array

//   const transformed = users.map((user) => ({
//     id: user.id,
//     name: user.username,
//     emai: user.email,
//   }));
//   console.log(transformed);
// });


