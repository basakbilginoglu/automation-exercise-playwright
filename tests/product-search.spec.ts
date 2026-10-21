
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import SearchData from '../test-data/search.json';


test.describe('Product Search', () => {
  test('should display relevant search results', async ({ page }) => {

  const productPage = new ProductPage(page);
  await productPage.navigateTo('products');
  
  await productPage.searchProduct(SearchData.searchTerm);

  await expect(page.getByText('Searched Products')).toBeVisible();

  const matchingProducts = page.locator('.productinfo p', {
    hasText: /tshirt/i,
});

  await expect(matchingProducts.first()).toBeVisible();

  });
});