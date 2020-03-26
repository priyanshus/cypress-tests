var newSavingAccountView = require('../banking-accounts/new-savings-view'),
  savingView = require('../banking-accounts/savings-view'),
  withdrawView = require('../transactions/withdraw-view');

var Common = function() {};

Common.prototype = {
  savingMenuOption: "#savings-menu",
  newSavingsMenuOption: "#new-savings-menu-option",
  viewSavings: "a[href='/account/savings-view']",
  withdrawMenuOption: "a[href='/account/withdraw']",

  navigateToAddNewSavingAccount: function() {
    cy.get(this.savingMenuOption).click();
    cy.get(this.newSavingsMenuOption).click();

    return newSavingAccountView;
  },

  navigateToViewSavings: function() {
    cy.get(this.savingMenuOption).click();
    cy.get(this.viewSavings).click();

    return savingView;
  },

  navigateToWithdrawAmount: function() {
    cy.contains('a','Transactions').click();
    cy.get(this.withdrawMenuOption).click();

    return withdrawView;
  },

  print: function() {
    cy.log('In banking account common');
  }
};

module.exports = new Common();
