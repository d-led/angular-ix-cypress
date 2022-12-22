import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/report-app-spec-[hash].xml',
      toConsole: false,
    },
    specPattern: [
      'cypress/e2e/**.cy.ts'
    ],
    supportFile: false,
    setupNodeEvents: async (on, config) => {
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
