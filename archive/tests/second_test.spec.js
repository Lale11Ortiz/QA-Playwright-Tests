// tests/second_test.spec.js
const { test, expect } = require('@playwright/test');

test('Buscar "Playwright" en DuckDuckGo y verificar resultados', async ({ page }) => {
  await page.goto('https://duckduckgo.com');

  // Buscar "Playwright"
  await page.locator('input[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');

  // Esperar resultados
  await page.waitForSelector('#links');

  // Validar que haya contenido relacionado
  await expect(page.locator('#links')).toContainText('Playwright');

  // Tomar screenshot de los resultados
  await page.screenshot({ path: 'duckduckgo_results.png' });
});