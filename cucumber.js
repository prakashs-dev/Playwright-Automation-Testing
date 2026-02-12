module.exports = {
  default: {
    paths: ["cucumber/features/**/*.feature"],
    require: ["cucumber/steps/**/*.js", "cucumber/support/**/*.js"],
    formate: ["progress"],
    timeout: 60000,
  },
};
