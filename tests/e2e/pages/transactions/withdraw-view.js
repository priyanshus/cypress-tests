var WithdrawView = function() {};

WithdrawView.prototype = {
  accountSelectorDropdown: "#id",
  withdrawAmountInput: "#amount",

  withdrawAmount: function(fromAccountName, withdrawlAmount) {
    //cy.get(this.accountSelectorDropdown).contains(fromAccountName);

    const test = cy.get(this.accountSelectorDropdown)
      .find('option')
      .contains(fromAccountName);

      cy.log(test);
      // .as('selectOption')
      // .then( () => {
      //   cy.get(this.accountSelectorDropdown)
      //     .select(`${this.selectOption.text()}`)
      // })

    cy.get(this.withdrawAmountInput).type(withdrawlAmount);
  }
};

module.exports = new WithdrawView();
