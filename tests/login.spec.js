import { test, expect } from "@playwright/test";

test.describe("Login page", () => {
  test("logs in with valid credentials", async ({ page }) => {
    await page.goto("/login/");

    await page.getByPlaceholder("Email").fill(process.env.TEST_USER_EMAIL);

    await page
      .getByPlaceholder("Password")
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#logoutButton")).toBeVisible();
  });

  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/login/");

    await page.getByPlaceholder("Email").fill(process.env.TEST_USER_EMAIL);

    await page.getByPlaceholder("Password").fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
