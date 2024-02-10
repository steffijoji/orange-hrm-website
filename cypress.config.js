const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    defaultCommandTimeout: 7000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
