# Playwright Test Suite

This repository contains Playwright tests to demonstrate modern end-to-end testing practices.

## Features
- TypeScript-based test setup
- Cross-browser testing (Chromium, Firefox, WebKit)
- Visual reporting and video on failure
- GitHub Actions CI

## Setup
```bash
npm install
npx playwright install
```

## Running Tests
```bash
npm test
```

## Viewing Reports
```bash
npm run test:report
```

### 🧪 Running Tests

#### Run All Tests (Headless)
This is the default mode and runs tests without opening a browser window:
```bash
npx playwright test
```

#### Run Tests with Browser UI (Headed Mode)
Useful for debugging or demos:
```bash
npx playwright test --headed
```

#### Optional: Slow Down Actions for Debugging
To slow each Playwright action (e.g., clicks, typing), configure it in `playwright.config.ts`:

```ts
use: {
  headless: false,
  slowMo: 100,
}
```

> `slowMo` is not a CLI option — it must be configured in code.

## CI
Tests run on push and pull request via GitHub Actions.