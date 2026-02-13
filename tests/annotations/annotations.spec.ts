// tests/annotations/annotations.spec.ts
import { test, expect } from '@playwright/test';

// Deze test wordt overgeslagen en verschijnt als "skipped".
test.skip('skip: wordt momenteel niet uitgevoerd', async ({ page }) => {
  await page.goto('https://example.com');
});

// Deze test markeert bekende bug/werkpunt, maar draait NIET (zoals skip).
test.fixme('fixme: bekend issue, tijdelijk uitgeschakeld', async () => {
  // normaal testcode, maar we voeren 'm niet uit
});

// Deze test draait wel, maar is gemarkeerd als "slow" zodat Playwright ruimer timeout geeft.
test('slow: krijgt extra tijd', async ({ page }) => {
  test.slow();
  await page.goto('https://example.com');
  await page.waitForTimeout(1500);
  await expect(page).toHaveTitle(/Example/);
});

// Voorbeeld van annotate op describe-niveau (alle tests in deze groep draaien serieel)
test.describe.configure({ mode: 'serial' });
test.describe('serial group', () => {
  test('B', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });

  test('A', async ({ page }) => {
    await page.goto('https://example.com/');
    await expect(page.locator('h1')).toBeVisible();
  });
});
``