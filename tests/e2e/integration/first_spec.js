var loginPage = require('../pages/login/login-page'),
    util      = require('../utils');


describe('DemoBank Application', function() {
  var accountName, initialDeposit;

  beforeEach(function() {
    cy.fixture('users').as('fixture')
    accountName = util.getRandomString('AccountName');
    initialDeposit = 5000;
    loginPage.open();
  });

  context('user adds a new individual saving account', function() {
    it.skip('should display the account name and initial deposit', function() {
      loginPage
        .login(this.fixture.username, this.fixture.password)
        .navigateToAddNewSavingAccount()
        .addNewSavingAccount(accountName, initialDeposit)
        .verifyAccountIsAdded(accountName, initialDeposit)
        .navigateToWithdrawAmount(accountName, withdrawAmount)
        .verifySavingTrascationIsSucessfull(accountName, withdrawAmount, balance);
    });
  });
});
