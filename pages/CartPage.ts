import {Page,Locator,expect} from '@playwright/test';
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


    private getProductRow(productName: string): Locator {
        return this.cartRows.filter({
            has: this.page.locator('.cart_description h4 a', {
                hasText: productName
            })
        });
    }

    
    async getProductTitle(productName:string): Promise<string> {
        const row = this.getProductRow(productName);
        await expect(row).toHaveCount(1);

        const title = await row.locator('.cart_description h4 a').textContent();
        return title?.trim() ?? '';
    }

     async getProductPrice(productName:string): Promise<string> {
        const row = this.getProductRow(productName);
        await expect(row).toHaveCount(1);

        const price = await row.locator('.cart_price').textContent();
        return price?.trim() ?? '';
    }

     async getProductQuantity(productName:string): Promise<number> {
        const row = this.getProductRow(productName);
        await expect(row).toHaveCount(1);

        const quantity = await row.locator('.cart_quantity button').textContent();
        return Number(quantity?.trim());
    }


}   