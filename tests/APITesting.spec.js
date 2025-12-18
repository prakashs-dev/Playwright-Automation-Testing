import { test, expect } from "@playwright/test";

var userId;

test("Get User", async ({ request }) => {
  const reponse = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  await expect(reponse.status()).toBe(200);
  console.log(await reponse.json());
});

test("Create User", async ({ request }) => {
  const reponse = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: {
        id: 1,
        name: "Prakash Saravanan",
        username: "Prakash",
        email: "spraks99@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    }
  );

  await expect(reponse.status()).toBe(201);
  userId = await reponse.json();
  console.log("User ID :", userId);
});

test("Update User", async ({ request }) => {
  const reponse = await request.put(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      data: {
        id: 1,
        name: "Prakash Saravanan",
        username: "Prakash",
        email: "t.spraks99@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "123456789",
        website: "spraks.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    }
  );

  await expect(reponse.status()).toBe(200);
  console.log(await reponse.json());
});

test("Delete User", async ({ request }) => {

  const reponse = await request.delete(
    "https://jsonplaceholder.typicode.com/users/1"
  );
    await expect(reponse.status()).toBe(200);
    
});
