# 10Web AI Website Builder - Cypress Smoke Test

## Overview

This repository contains an automated smoke test using Cypress for the core “happy path” of the 10Web AI Website Builder.  
The test covers creating a website from description input, signing up a user, and validating the preview website's key elements.

---

## Prerequisites

- Node.js (v14 or newer recommended)  
- npm (comes with Node.js)  
- Internet connection (to access 10Web websites)  

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Movses66/10web-ai-website-builder-smoke-test.git
cd 10web-ai-website-builder-smoke-test


**Install dependencies**
If package.json is already set up with Cypress as a dev dependency, run:
npm install

If Cypress is not yet installed, install it globally or as a dev dependency with:
npm install cypress --save-dev

Open Cypress Test Runner
npx cypress open

Then:
Choose Browser
Choose the spec
10web_ai_website_builder_smoke.cy.js


**Run tests headlessly**
npx cypress run --spec "cypress/e2e/10web_ai_website_builder_smoke.cy.js"


**Test details **
The test launches the AI Website Builder page: https://10web.io/ai-website-builder/

Enters a sample website description and initiates generation.

Performs user signup with a unique email on my.10web.io using cy.origin() for cross-origin handling.

Waits for website generation to complete.

Clicks the preview button and validates that key elements (.db-demo-preview-header and .db-demo-preview-body-wrap) are visible on the generated website preview.

**Notes**
Notes
The signup email uses a timestamp to ensure uniqueness on every test run.

Cypress's cy.origin() is used to handle cross-origin interaction with my.10web.io.

The preview page is verified by checking visible header and body wrapper elements as key indicators of successful generation.
