// tests/safe_test.spec.js
const { test, expect } = require('@playwright/test');

test('Navegar a example.com y verificar el título', async ({ page }) => {
  await page.goto('https://example.com');

  // Validamos el título de la página
  await expect(page).toHaveTitle('Example Domain');

  // Validamos un texto visible
  await expect(page.locator('h1')).toHaveText('Example Domain');

  // Tomamos captura de pantalla
  await page.screenshot({ path: 'example_com.png' });
});