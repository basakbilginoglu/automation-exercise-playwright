import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly userEmailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.userEmailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
    }

    async login(email: string, password: string): Promise<void> {
        await this.userEmailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
  