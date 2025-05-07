import { test, expect } from '@playwright/test';

test.describe('UltimateQA Login', () => {
  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://courses.ultimateqa.com/users/sign_in');

    // Wait for the input fields to be visible before interacting
    await page.waitForSelector('#user\\[email\\]');
    await page.waitForSelector('#user\\[password\\]');

    // Fill in the email and password fields with invalid credentials
    await page.locator('#user\\[email\\]').fill('invalid@example.com');
    await page.locator('#user\\[password\\]').fill('invalidpassword');

    // Click the Sign In button
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Assert that the error message appears
    await expect(page.locator('.form-error__list-item')).toContainText('Invalid email or password.');
  });

  test('should log in with valid credentials', async ({ page }) => {
    await page.goto('https://courses.ultimateqa.com/users/sign_in');

    // Wait for the input fields to be visible before interacting
    await page.waitForSelector('#user\\[email\\]');
    await page.waitForSelector('#user\\[password\\]');

    // Fill in the email and password fields with valid credentials
    await page.locator('#user\\[email\\]').fill('JMTester.MCTester@gmail.com');
    await page.locator('#user\\[password\\]').fill('QualityIsKey');

    //Click the Sign In button
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Wait for a successful redirect or element to confirm login
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections');
    await expect(page.locator('h2.collections__heading')).toHaveText('Products');
    await expect(
        page.locator('button.dropdown__toggle-button', { hasText: 'Jmtester M' })
      ).toBeVisible();      
  });
});
