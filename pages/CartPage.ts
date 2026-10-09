import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    private readonly cartRows: Locator;
    private readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cartRows = page.locator('.cart_info tbody tr');
        this.proceedToCheckoutButton = page.locator('.cart_navigation a:has-text("Proceed To Checkout")');
    }

    async getCartItemsCount(): Promise<number> {
        return await this.cartRows.count();
    }

    async clickProceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutButton.click();
    }
    async getFirstProductTitle(): Promise<string> {
       if (await this.getCartItemsCount() > 0) {
        const title = await this.cartRows.first().locator('.cart_description h4 a').textContent();
        return title ? title.trim() : '';
       }
      return '';
    }


}   