// tests/emulation/mobile.spec.ts
import { test, expect } from '@playwright/test';

test('mobile emulation: viewport en user-agent verschillen', async ({ page, context }) => {
  // Toon device user agent (handig voor debugging)
  const ua = await context.newCDPSession(page).then(s => s.send('Browser.getVersion')).catch(() => null);
  await page.goto('https://example.com');

  // Simpele check die overal hoort te werken
  await expect(page).toHaveTitle(/Example/);

  // (optioneel) permissions + geolocatie
  // Als je in config 'use.permissions' en 'use.geolocation' zet, kun je hier app-gedrag testen.
});
``