# Automation Exercise – Playwright Tests

## Overview

This project contains UI test automation for [Automation Exercise](https://automationexercise.com/) using Playwright and TypeScript.

The goal is to validate important user flows, including product search, cart operations, and login validation. The repository also includes API testing artifacts created with Postman.

## Tech Stack

- Playwright
- TypeScript
- Node.js and npm
- Postman
- GitHub Actions

## Project Structure

```text
automation-exercise-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── api/
│   ├── collections/
│   │   └── collection.json
│   ├── environments/
│   │   └── environment.json
│   └── evidence/
│       └── postman-run.png
├── pages/
├── tests/
├── test-data/
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

*Note: Update the structure above if your repository contains additional files or folders.*

## Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/basakbilginoglu/automation-exercise-playwright.git
cd automation-exercise-playwright
```

### 2. Install Dependencies

Choose one of the following options.

**Option A:**

```bash
npm install
```

**Option B:**

```bash
npm ci
```

`npm ci` requires the committed `package-lock.json` file and installs dependencies according to the lockfile. It is suitable for clean and reproducible installations.

Use either `npm install` or `npm ci`; running both is not necessary.

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npm test
```

Alternatively:

```bash
npx playwright test
```

### Run Tests with a Visible Browser

```bash
npx playwright test --headed
```

### Run Tests in Playwright UI Mode

```bash
npm run test:ui
```

### Run Tests in a Specific Browser

These commands require the corresponding browser projects to be configured in `playwright.config.ts`.

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run TypeScript Type Checking

```bash
npm run typecheck
```

This command runs TypeScript's static type checker without generating output files. It does not execute Playwright tests.

### Run a Specific Test File

Replace the example path with the actual test file path:

```bash
npx playwright test tests/product-search.spec.ts
```

### View the HTML Report

After running the tests:

```bash
npm run test:report
```

## Test Scope

### 1. Product Search

- Search for a product using the search field.
- Verify that the search results contain relevant product information.

### 2. Cart

- Add a product to the cart.
- Verify the product name and price in the cart.
- Verify that the product quantity is one.

### 3. Negative Login

- Attempt to log in using invalid credentials.
- Verify that the expected error message is displayed.

## Design Decisions

- **Page Object Model (POM):** Page-specific interactions are organized into page classes to improve maintainability and reusability.
- **Business-critical assertions:** The cart test checks the product name, price, and quantity.
- **Negative testing:** The login test verifies the application's response to invalid credentials.
- **TypeScript:** Static type checking helps identify certain errors during development before the tests run.
- **Cross-browser configuration:** Playwright can run tests in Chromium, Firefox, and WebKit when the corresponding projects are configured.
- **Separation of concerns:** Tests, page objects, test data, and API-related files are organized separately.
- **CI integration:** GitHub Actions runs the test suite according to the configured workflow triggers.

## CI Integration

GitHub Actions can execute the Playwright test suite in a CI environment. The workflow behavior depends on the triggers configured in `.github/workflows/playwright.yml`.

If the workflow is configured for pushes and pull requests targeting the `main` and `master` branches, and supports manual execution through `workflow_dispatch`, these triggers allow the suite to run automatically or on demand.

### Successful CI Runs

Successful CI runs help verify that the test suite executes as expected in the CI environment.

- **Successful Run 1:** Add the link to a successful run from the TypeScript repository.
- **Successful Run 2:** Add the link to another successful run from the TypeScript repository.

## Locator Improvement and Test Verification

### Product-Specific Locator

I replaced `.first()` with a product-specific locator to make the test more reliable.

The `.first()` method selects the first matching element, which may not correspond to the intended product. Locating the intended product by name helps ensure that the correct product's title and price are checked.

**Code diff:** Add the link to the relevant commit in the TypeScript repository.

### Cart Quantity Assertion

I added a quantity assertion to verify that the product was added to the cart with a quantity of one.

**Code diff:** Add the link to the relevant commit in the TypeScript repository.

## Postman API Testing Evidence

The Postman collection was executed using Collection Runner.

**Postman execution screenshot:**

![Postman API Test Results](api/evidence/postman-run.png)

### API Response Validation

Both HTTP status codes and response bodies are validated in Postman tests.

- **Status code validation:** Checks whether the API returns the expected HTTP status.
- **Response body validation:** Checks whether the returned data or error message meets expectations.

Using both validations helps detect incorrect API behavior and reduces the risk of false-positive test results.
