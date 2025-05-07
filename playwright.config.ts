import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://ultimateqa.com',
    headless: false,
    screenshot: 'on', // Take screenshots only on failure
    video: 'on', // Record video only on failure
    trace: 'on', // Record trace only on failure
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