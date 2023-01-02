const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 9000,
    "reporter": "mochawesome",
    "reporterOptions":{
      "charts": "true",
      "overwrite": "true",
      "json": "true",
      "html": "false",
      "reportDir": "cypress/reports"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
