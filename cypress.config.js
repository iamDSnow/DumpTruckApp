const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'eq8yu2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
