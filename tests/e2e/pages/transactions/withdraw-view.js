var SavingsView = require('../banking-accounts/savings-view');
var WithdrawView = function() {};

WithdrawView.prototype = {
  accountSelectorDropdown: "#id",
  withdrawAmountInput: "#amount",
  submitButton: ".btn.btn-primary.btn-sm",

  withdrawAmount: function(fromAccountName, withdrawlAmount) {
    cy.get(this.accountSelectorDropdown).contains(fromAccountName)
      .then(element => {
        var optionText = element.text();
        cy.get(this.accountSelectorDropdown).select(optionText);
      });

    cy.get(this.withdrawAmountInput).type(withdrawlAmount);
    cy.get(this.submitButton).click();

    return SavingsView;
  }
};

module.exports = new WithdrawView();
