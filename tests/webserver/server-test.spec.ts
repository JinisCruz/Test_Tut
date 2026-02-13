// tests/webserver/server-test.spec.ts
import { test, expect } from '@playwright/test';

test('webserver: laad lokale app correct', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveURL(/localhost/);
});