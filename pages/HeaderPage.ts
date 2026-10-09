import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class HeaderPage extends BasePage {
    private readonly homeLink: Locator;
    private readonly productsLink: Locator;
    private readonly signUpLoginLink: Locator;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.homeLink = page.locator('a:has-text("Home")');
        this.productsLink = page.locator('a:has-text("Products")');
        this.signUpLoginLink = page.locator('a:has-text("Signup / Login")');
        this.cartLink = page.locator('header a[href="/view_cart"]');
    }
    async clickHomeLink(): Promise<void> {
        await this.homeLink.click();
    }

    async clickProductsLink(): Promise<void> {
        await this.productsLink.click();
    }
    
    async clickSignUpLoginLink(): Promise<void> {
        await this.signUpLoginLink.click();
    }   

    async clickCartLink(): Promise<void> {
        await this.cartLink.click();
    }
}