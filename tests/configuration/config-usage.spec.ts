// tests/configuration/config-usage.spec.ts
import { test, expect } from '@playwright/test';

test('config/use: gebruikt viewport, trace & retry policy', async ({ page }) => {
  // Als je in config `use.viewport` hebt gezet, zal dit formaat effectief zijn.
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});

// Test met korte expect-timeout demonstreren (faalt zelden, maar is een anker)
test('config/timeouts: expect timeout wordt gerespecteerd', async ({ page }) => {
  await page.goto('https://example.com');
  // Synthetisch voorbeeld: element dat bestaat
  await expect(page.getByRole('heading', { name: /Example Domain/i })).toBeVisible();
});