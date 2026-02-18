module.exports = {
  default: {
    paths: ["cucumber/features/*.feature"],
    require: ["cucumber/steps/*.js", "cucumber/support/*.js"],
    formate: ["progress"],
    timeout: 60000,
    formatOptions: {
      snippetInterface: "async-await",
    },
    publishQuiet: true,
    dryRun: false,
    format: [
      "progress-bar",
      "html:test-results/reports/cucumber-report.html",
      "json:test-results/reports/cucumber-report.json",
    ],
  },
};
