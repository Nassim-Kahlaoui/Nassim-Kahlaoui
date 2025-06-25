const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '4vuenz',
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      // Tu peux ajouter des plugins ici plus tard
    },
  },
});
