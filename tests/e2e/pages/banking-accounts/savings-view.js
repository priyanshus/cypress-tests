var SavingView = function() {};

SavingView.prototype = {
  print: function() {
    cy.log('Im at saving view');
  },

  verifyAccountIsAdded: function(accountName, initialDeposit) {
    cy.contains('div', accountName).should('be.visible');
    cy.contains('div', initialDeposit).should('be.visible');
  },

  verifySavingTrascationIsSucessfull(transactionAmount, balance) {
    cy.contains('td', transactionAmount).should('be.visible');
    cy.contains('td', balance).should('be.visible');
  }
};

module.exports = new SavingView();
