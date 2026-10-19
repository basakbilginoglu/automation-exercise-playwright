# Automation Exercise – Playwright Tests

## Overview

This project contains UI test automation for [Automation Exercise](https://automationexercise.com/) using Playwright and TypeScript.

The goal is to validate important user flows, including product search, cart operations, and login validation. The project also includes API testing artifacts created with Postman.

## Tech Stack

- TypeScript
- Playwright
- Node.js
- Postman
- GitHub Actions
- Git

## Project Structure

```text
automation-exercise-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── api/
│   ├── collections/
│   ├── environments/
│   └── evidence/
├── evidence/
├── pages/
├── tests/
├── test-data/
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

## Test Coverage

### UI Tests

- **Product Search:** Verifies that searching for a product displays relevant search results.
- **Add to Cart:** Checks that a product can be added to the shopping cart and that the relevant product information is displayed.
- **Negative Login:** Verifies login validation with invalid credentials.

### API Testing

Postman collection and environment files are maintained in the `api/` directory. API testing evidence is stored separately under `api/evidence/`.

## Page Object Model

The project uses the Page Object Model (POM) to separate page-specific interactions from test scenarios.

- `pages/` contains page object classes.
- `tests/` contains Playwright test scenarios.
- `test-data/` contains test data.
- `evidence/` contains project-level testing evidence.

## Prerequisites

- Node.js
- npm
- Git

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd <repository-directory>
npm ci
npx playwright install
```

## Running Tests

Run all Playwright tests:

```bash
npm test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## TypeScript Type Checking

The project uses `tsconfig.json` to configure TypeScript compiler options.

Run the type check without generating JavaScript output:

```bash
npm run typecheck
```

This executes `tsc --noEmit` to check for TypeScript errors without generating JavaScript files.

## Test Reports and Failure Evidence

Playwright is configured to generate an HTML report and retain failure-related evidence.

- **HTML report:** `playwright-report/`
- **Test results:** `test-results/`
- **Screenshots:** Captured for failed tests.
- **Traces:** Retained for failed tests.
- **Videos:** Retained for failed tests when available.

Open the HTML report locally:

```bash
npx playwright show-report
```

## Continuous Integration (CI)

GitHub Actions is configured in `.github/workflows/playwright.yml`.

The workflow runs on pushes to `main` or `master`, pull requests targeting these branches, and manual workflow dispatches.

### CI Pipeline

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm ci`.
4. Runs TypeScript type checking using `npm run typecheck`.
5. Installs Playwright browsers.
6. Executes the Playwright test suite.
7. Uploads the HTML report and test results as workflow artifacts.

The workflow runs on Ubuntu. In CI, tests use a single worker and can be retried up to two times.

### CI Evidence

Two consecutive GitHub Actions runs completed successfully.

- **Run 1:** [View workflow run](https://github.com/basakbilginoglu/automation-exercise-playwright/actions/runs/39244011422/job/118031394973)
- **Run 2:** [View workflow run](https://github.com/basakbilginoglu/automation-exercise-playwright/actions/runs/39244581895)

Each run provides execution details and test results. Available HTML reports and failure evidence can be accessed through the workflow artifacts.

## API Testing Evidence

The `api/` directory contains:

- `collections/` – Postman collection files.
- `environments/` – Postman environment files.
- `evidence/` – API testing screenshots and supporting evidence.

## Notes

- The project tests a public demo website, so external availability and third-party behavior may affect test execution.
- API testing artifacts and UI automation tests are maintained separately.
- CI results represent the test scope and browser configurations executed in each workflow run.
