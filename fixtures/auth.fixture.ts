// fixtures/auth.fixture.ts
import { test as base } from '@playwright/test';

type Auth = { token: string; role: 'admin' | 'user' };

export const test = base.extend<{ auth: Auth }>({
  auth: async ({}, use) => {
    // Hier zou je een echte token/rol kunnen ophalen (API, DB, etc.)
    await use({ token: 'dummy-token-123', role: 'admin' });
  },
});

export const expect = test.expect;
``