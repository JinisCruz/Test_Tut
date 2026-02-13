// tests/fixtures/custom-fixture.spec.ts
import { test, expect } from '../../fixtures/auth.fixture';

test('custom fixture: kan token en rol gebruiken', async ({ auth, page }) => {
  expect(auth.token).toBeTruthy();
  expect(auth.role).toBe('admin');

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);

  // (optioneel) doorgeven via header om authorized request te simuleren
  await page.route('**/api/**', route => {
    const headers = { ...route.request().headers(), Authorization: `Bearer ${auth.token}` };
    route.continue({ headers });
  });
});