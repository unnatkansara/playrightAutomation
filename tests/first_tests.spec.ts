import { test, expect } from '@playwright/test';

test.describe('login tests', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test('page has title', async ({ page }) => {
       // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/OrangeHRM/, { timeout: 10000 });
    });

    test('perform a login', async ({ page }) => {
        // Enter user name.
        await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible({ timeout: 10000 });
        page.getByRole('textbox', { name: 'username' }).fill("Admin", { timeout: 10000 });

        // Enter password.
        await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible({ timeout: 10000 });
        page.getByRole('textbox', { name: 'password' }).fill('admin123', { timeout: 10000 });

        // Click submit button.
        await expect(page.getByRole('button', { name: ' Login ' })).toBeVisible({ timeout: 10000 });
        page.getByRole('button', { name: ' Login ' }).click({ timeout: 10000 });

        // Click submit button.
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 });
    });
});

