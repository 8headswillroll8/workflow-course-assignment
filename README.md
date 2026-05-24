# Workflow repo for the CA

Noroff workflow course assignment focused on improving an existing vanilla JavaScript project with code quality tools, pre-commit hooks, unit tests, and end-to-end tests.

## Features

- ESLint and Prettier configuration
- Husky and lint-staged pre-commit hooks
- Unit testing with Vitest
- End-to-end testing with Playwright
- Environment variable support with dotenv
- Automated login and navigation testing

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

```bash
npm install
```

### Running the project

```bash
npm run start
```

Open the project in your browser at:

http://localhost:5500

### Running tests

```bash
npm run test:unit
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
TEST_USER_EMAIL=your-test-user@stud.noroff.no
TEST_USER_PASSWORD=your-test-password
```

## Available Scripts

- `npm run dev` - Watch and compile Tailwind CSS
- `npm run start` - Start local development server
- `npm run test:unit` - Run Vitest unit tests
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run lint` - Run ESLint

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Vitest
- Playwright
- Husky
- Tailwind CSS

## AI Usage

Tool used: ChatGPT

Purpose:

- Debugging test setup and configuration
- Understanding Vitest and Playwright concepts
- Guidance on Git workflow and pull requests
- Explanations of ESLint, Husky, and environment variables

Outcome:

- Improved understanding of testing workflows and project configuration
- Code was reviewed, adjusted, and written independently

## Author

8headswillroll8
