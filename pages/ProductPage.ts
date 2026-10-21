import {Page,Locator,expect} from '@playwright/test';
import { BasePage } from './BasePage';

import { strict } from 'assert';

export class ProductPage extends BasePage {

  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly addToCartButton: Locator;
  private readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');

        this.addToCartButton = page.locator('.add-to-cart');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });

    }
    async searchProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
    
     async addProductToCart(productName:string): Promise<void> {
        const product = this.page.locator('.productinfo')
            .filter({ hasText: productName });

        await expect(product).toHaveCount(1);
        await product.hover();
        await product.locator('.add-to-cart').click();
    }
    async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
}    
