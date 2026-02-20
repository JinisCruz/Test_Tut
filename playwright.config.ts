// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // ============================================================
  // 1) TIMEOUTS
  // ============================================================
  timeout: 30_000, // Maximale duur van een test
  expect: {
    timeout: 5_000, // Timeout voor expect() assertions
  },

  // ============================================================
  // 2) RETRIES
  // ============================================================
  //retries: 2, // Extra pogingen in CI

  // ============================================================
  // 3) PARALLELISM
  // ============================================================
  fullyParallel: true,
  workers: process.env.CI ? 4 : undefined,

  // ============================================================
  // 4) REPORTERS
  // ============================================================
  reporter: [
    ['list'],                         // CLI output
    ['html'],      // HTML report
    ['junit', { outputFile: 'junit.xml' }] // CI integratie
  ],

  // ============================================================
  // 5) GLOBAL SETUP + TEARDOWN
  // ============================================================
  globalSetup: require.resolve('./global-setup/setup'),
  globalTeardown: require.resolve('./global-setup/teardown'),

  // ============================================================
  // 6) STANDARD SETTINGS (use)
  // ============================================================
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry', // Trace viewer bij een falende retry
  },

  // ============================================================
  // 7) PROJECTS (cross‑browser + mobile emulation)
  // ============================================================
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {

      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
        permissions: ['geolocation'],
        geolocation: { latitude: 50.85, longitude: 4.35 }, // Brussel
        locale: 'nl-BE',
        timezoneId: 'Europe/Brussels'
      }

    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] }
    }
  ],

  // ============================================================
  // 8) WEB SERVER (alleen activeren als je app draait)
  // ============================================================
   webServer: {
     command: 'npm run dev',
     port: 3000,
     timeout: 120 * 1000,
     reuseExistingServer: !process.env.CI
   },

  // ============================================================
  // 9) SHARDING (uitvoerbaar via CLI)
  //    npx playwright test --shard=1/3
  // ============================================================

});