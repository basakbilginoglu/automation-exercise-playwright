
import { test, expect } from '@playwright/test';

test.describe('Product Search', () => {
  test('should return relevant products when searching for a keyword', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await page.goto('https://automationexercise.com/products');

    await page.locator('#search_product').fill('Tshirt');
    await page.locator('#submit_search').click();

    await expect(page.getByText('Searched Products')).toBeVisible();

    const matchingProducts = page.locator('.productinfo p', {
      hasText: /tshirt/i,
    });

    await expect(matchingProducts.first()).toBeVisible();
  });
});