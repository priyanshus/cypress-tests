"use strict";
var commonForBanking = require('../left-panel');
var LoginPage = function() {};

LoginPage.prototype = {
  // locators
  usernameInput: "#username",
  passwordInput: "#password",
  submitButton: "#submit",

  open: function() {
    cy.visit('/login');
  },

  login: function(username, password) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.submitButton).click();

    return commonForBanking;
  },

  print: function() {
    cy.log('In login page view');
    return commonForBanking;
  }
}

module.exports = new LoginPage();
