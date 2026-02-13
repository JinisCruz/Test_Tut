// tests/parameterized/data-driven.spec.ts
import { test, expect } from '@playwright/test';

type Scenario = { path: string; titleRe: RegExp };

const cases: Scenario[] = [
  { path: 'https://example.com', titleRe: /Example Domain/ },
  { path: 'https://example.com/', titleRe: /Example Domain/ },
];

for (const c of cases) {
  test(`data-driven: controleer titel voor ${c.path}`, async ({ page }) => {
    await page.goto(c.path);
    await expect(page).toHaveTitle(c.titleRe);
  });
}
