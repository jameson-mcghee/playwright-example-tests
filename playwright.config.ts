import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://ultimateqa.com',
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Take screenshots only on failure
    video: 'retain-on-failure', // Record video only on failure
    trace: 'retain-on-failure', // Record trace only on failure
    launchOptions:{
        slowMo: process.env.SLOMO ? 1_000 : 0, // Slow down actions by 1s when using the Env Var SLOMO=true
      },
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
});