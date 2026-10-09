import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly firstProductOverlay: Locator;
  private readonly addToCartButton: Locator;
  private readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.firstProductOverlay = page.locator('.product-overlay');
        this.addToCartButton = page.locator('.add-to-cart');
        this.continueShoppingButton = page.locator('.continue-shopping');

    }
    async searchProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
    
    async addFirstProductToCart(): Promise<void> {
        await this.firstProductOverlay.first().hover();
        await this.addToCartButton.first().click();
    }
}    
