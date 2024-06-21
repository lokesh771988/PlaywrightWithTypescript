import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('lokesh');
  await page.getByRole('link', { name: 'Lokesh Kanagaraj Wikipedia' }).click();
});