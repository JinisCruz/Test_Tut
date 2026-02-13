// tests/sharding/shard-example.spec.ts
import { test, expect } from '@playwright/test';

// Meerdere tests, zodat sharding effect heeft
for (let i = 1; i <= 6; i++) {
  test(`shard case #${i}`, async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
    await page.waitForTimeout(150); // kleine pauze om verdeling zichtbaar te maken
  });
}