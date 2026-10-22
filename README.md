# Playwright POM
**Work in progress** — this project is in active development.

UI test automation project built with [Playwright](https://playwright.dev/) and TypeScript, using the **Page Object Model (POM)** design pattern.

Tests run against [The Internet](https://the-internet.herokuapp.com/) — a public demo site for practicing test automation.

## Tech stack

- [Playwright Test](https://playwright.dev/docs/intro)
- TypeScript
- Node.js

## Project structure

```
├── data/        # Test data and internal tracking of covered pages/tests
├── pages/       # Page Objects
├── tests/       # Test specs
└── playwright.config.ts
```

## Getting started

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Open the HTML report
npx playwright show-report
```

## Roadmap

- [ ] Home page object
- [ ] Positive and negative login tests
- [ ] More pages from The Internet...
