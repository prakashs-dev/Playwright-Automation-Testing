const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results/reports",
  reportPath: "test-results/cucumber-report",
  reportName: "Playwright Automation Report",
  pageTitle : "Adactin Hotel Test Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "144.0.7559.133",
    },
    device: "Prakash S - Laptop",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Adaction Hotel" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    ],
  },
});
