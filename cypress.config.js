const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl1: 'https://phptravels.com/demo/',
     env: {
          secondUrl: 'https://www.saucedemo.com/' 
     },
    
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
   
   },
})