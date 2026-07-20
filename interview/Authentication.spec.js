import { test, expect } from "@playwright/test";
import { log } from "console";

test("Token based flow", async ({ request }) => {
  const loginReq = await request.post(
    "https://api.escuelajs.co/api/v1/auth/login",
    {
      data: {
        email: "john@mail.com",
        password: "changeme",
      },
    }
  );

  expect(loginReq.status()).toBe(201);
  const loginBody = await loginReq.json();
  const token = loginBody.access_token;

  const userReq = await request.get(
    "https://api.escuelajs.co/api/v1/auth/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  expect(userReq.status()).toBe(200);
  const userBody = await userReq.json();
  console.log(userBody);
});
