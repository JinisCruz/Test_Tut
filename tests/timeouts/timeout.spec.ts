// tests/timeouts/timeout.spec.ts
/*
import { test, expect } from '@playwright/test';

test('timeouts: expect-timeout (faalt na de ingestelde tijd als element niet verschijnt)', async ({ page }) => {
  await page.goto('https://example.com');
  // We vragen bewust om een niet-bestaand element (zou moeten falen op expect-timeout).
  await expect(page.getByTestId('bestaat-niet')).toBeVisible();
});

test('timeouts: test-timeout (simuleer lange taak)', async ({ page }) => {
  await page.goto('https://example.com');
  // Doe iets dat langer kan duren; pas je globale test-timeout aan om het effect te zien.
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle(/Example Domain/);
});*/