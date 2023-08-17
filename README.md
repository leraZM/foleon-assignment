# Trello E2E automation tests with Cypress

This repository contains end-to-end automation tests written using Cypress for the Trello application.

## Test Assignement

You can find the test assignment details here: [Technical Assignment](https://foleon-admin.foleon.com/qa-interview/qa-engineer-assignment/technical-assignment)

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Get Started

- Clone the repository.

- Install dependencies: `npm install`

### Running Tests

To run the end-to-end automation tests, use the following command:

   ```bash
   npx cypress open
   ```

Cypress will launch its test runner, allowing you to select and execute tests.

### Future Improvements

- Instead of relying on CSS selectors, which can change if the design changes, use data attributes specifically for testing, e.g., data-test-id.

- Add Cucumber for Behavior-Driven Development (BDD) integration.

- Extend test coverage.
