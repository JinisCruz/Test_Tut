// tests/typescript/typescript.spec.ts
import { test, expect } from '@playwright/test';

type User = {
  id: number;
  name: string;
};

function getUser(): User {
  return { id: 1, name: 'Jonas' };
}

test('typescript: compile-time type checking werkt', async ({ page }) => {
  const u = getUser();
  // TypeScript checkt types nog vóór de test draait
  expect(u.name).toBe('Jonas');

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});