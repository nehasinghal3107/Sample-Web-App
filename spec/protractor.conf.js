// An example configuration file.
exports.config = {
  // Do not start a Selenium Standalone sever - only run this using chrome.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./e2e_test/**/*.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
