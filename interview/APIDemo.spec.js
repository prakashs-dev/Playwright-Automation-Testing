import { test, expect } from "@playwright/test";

// test("API GET Method", async ({ request }) => {
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

test.skip("sample", async ({ page, request }) => {
  const response = await request.post("https://fakestoreapi.com/users", {
    data: {
      username: "prakash",
      email: "john@example.com",
      password: "pass123",
    },
  });
  const users = await response.json();
  expect(response.status()).toBe(201);
  // console.log(response.statusText());
  console.log(response.headers().server);
  console.log(response.headers().date);

  // const auth = await request.post("https://fakestoreapi.com/auth/login", {
  //   data: {
  //     username: "john_doe",
  //     password: "pass123",
  //   },
  // });

  // expect(auth.status()).toBe(401);
  // const body = await auth.text(); // here text is response not a json, its a text
  // console.log(body);
});

// test("mocks a fruit and doesn't call api", async ({ page }) => {
//   // Mock the api call before navigating
//   await page.route("*/**/api/v1/fruits", async (route) => {
//     const json = [{ name: "Strawberry", id: 21 }];
//     await route.fulfill({ json });
//   });

//   await page.goto("https://demo.playwright.dev/api-mocking");

//   await expect(page.getByText("Strawberry")).toBeVisible();
// });

test("mock api response", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: "Loquat", id: 100 });
    json.push({ name: "Strawberry", id: 500 });
    await route.fulfill({ response, json });
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  await expect(page.getByText("Loquat", { exact: true })).toBeVisible();
  await expect(page.getByText("Strawberry", { exact: true })).toBeVisible();
});
