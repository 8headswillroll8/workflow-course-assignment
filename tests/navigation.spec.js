import { test, expect } from "@playwright/test";

test.describe("Venue navigation", () => {
  test("navigates from homepage to venue details page", async ({ page }) => {
    // Navigate to homepage
    await page.goto("/");

    // Wait for venue links to load
    const venueLinks = page.locator('a[href*="/venue/?id="]');

    await expect(venueLinks.first()).toBeVisible();

    // Click first venue
    await venueLinks.first().click();

    // Verify venue details page
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
