// tests/parallelism/parallel.spec.ts
import { test, expect } from '@playwright/test';

// Deze tests kunnen mooi parallel lopen (standaard).
for (const n of [1, 2, 3, 4]) {
  test(`parallel test ${n}`, async ({ page }) => {
    await page.goto('https://example.com');
    await page.waitForTimeout(250 + n * 50); // kleine spreiding
    await expect(page).toHaveTitle(/Example/);
  });
}

// Deze groep forceren we serial:
test.describe.configure({ mode: 'serial' });
test.describe('serial-only group', () => {
  test('stap A', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('stap B', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL('https://example.com/');
  });
});
