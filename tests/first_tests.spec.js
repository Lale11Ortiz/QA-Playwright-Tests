const { test, expect } = require('@playwright/test');

test('Test simple con Playwright', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
  await page.screenshot({ path: 'screenshot.png' });
});