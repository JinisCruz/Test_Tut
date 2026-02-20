// tests/retries/retries.spec.ts
/*
import { test, expect } from '@playwright/test';

let counter = 0;

// Deze test faalt de eerste keer en slaagt daarna (simuleert flakiness).
test('retries: faal eerst, slaag op retry', async () => {
  counter++;
  if (counter === 1) {
    // 1e run: gooi error
    throw new Error('Intentional flaky failure (first attempt).');
  }
  // retry-run: slaagt
  expect(true).toBe(true);
});*/