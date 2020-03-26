var savingsView = require('./savings-view');
var NewSavingsView = function() {};

NewSavingsView.prototype = {
  savingRadio: "#Savings",
  individualRadio: "#Individual",
  nameInput: "#name",
  initialDeposit: "#openingBalance",
  newSavingSubmitButton: "#newSavingsSubmit",

  addNewSavingAccount: function(accountName, initialDeposit) {
    cy.log('I\'m at new saving account');
    cy.get(this.savingRadio).click();
    cy.get(this.individualRadio).click();
    cy.get(this.nameInput).type(accountName);
    cy.get(this.initialDeposit).type(initialDeposit);
    cy.get(this.newSavingSubmitButton).click();

    return savingsView;
  }
};

module.exports = new NewSavingsView();
