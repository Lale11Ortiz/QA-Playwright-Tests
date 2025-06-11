# 🧪 QA-Playwright-Tests

Personal project using **Playwright** for automated testing to complement my QA Automation toolkit.
Includes basic verification tests with `@playwright/test` and clean folder structure.

---

## 📁 Project Structure

QA-Playwright-Tests/
  - node_modules/ # Project dependencies
  - tests/ # Main folder with active test cases
    - first_test.spec.js # Basic browser opening test
    - safe_test.spec.js # Functional search test

  - test-results/ # Automatically generated reports
  - archive/ # Archived/disabled test cases
     - second_test.spec.js # Failing DuckDuckGo test (deprecated)
     - .gitkeep

  - package.json # Project configuration (npm)
  - package-lock.json # Dependency tree details
  - playwright.config.js # Global Playwright configuration
  - .gitignore # Ignored files and folders
  - README.md # Main documentation (Spanish version)
  - README_En.md # Main documentation (English version)

---

## 🧪 Automated Tests

### ✔️ Test 1 – Open browser and verify
- File: `first_test.spec.js`
- Actions: Opens a web page and validates title
- Result: ✅ passed

### ✔️ Test 2 – Safe search test
- File: `safe_test.spec.js`
- Actions: Navigates to a search page and checks text
- Result: ✅ passed

### 📦 Archived Test
- File: `second_test.spec.js`
- Reason: Failing test due to DuckDuckGo restrictions
- Action: Moved to `archive/` to keep the project clean and traceable

---

## 🛠 Tools Used

- [Playwright](https://playwright.dev/)
- Node.js
- Git + GitHub
- Git Bash (CLI)
- Modular test architecture

---

## 📁 `archive/` Folder

Contains test files that were deprecated or disabled.
Kept for documentation and technical history purposes without affecting test execution.

---

## 🧠 Final Notes

- This project serves as a hands-on introduction to Playwright.
- Clean structure designed to support future CI/CD integration.
- A valuable addition to my automation portfolio with multi-language skills.

---

## 👨🏽‍🚀 Author

**Luis Alejandro Ortiz** – QA Automation Engineer
📌 GitHub: [Lale11Ortiz](https://github.com/Lale11Ortiz)