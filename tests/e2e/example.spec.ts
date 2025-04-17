import { test, expect } from '@playwright/test';

test('homepage has expected title and content', async ({ page }) => {
  await page.goto('/fake-landing-page');
  await expect(page).toHaveTitle('Fake landing page - Ultimate QA');
  await expect(page.getByRole('heading', { name: 'Learn to Code Websites, Apps & Games' })).toBeVisible();
});