var loginPage = require('../pages/login/login-page'),
  leftPanel = require('../pages/left-panel'),
  util = require('../utils');


describe('DemoBank Application', function() {
  var accountName, initialDeposit;
  var withdrawAmount = 100;

  beforeEach(function() {
    cy.fixture('users').as('fixture')
    accountName = util.getRandomString('AccountName');
    initialDeposit = 5000;
    loginPage.open();
  });

  afterEach(function() {
    cy.end()
  });

  context('user adds a new individual saving account and withdraw some amount', function() {
    it('should add the account with initial deposit and transactions', function() {
      loginPage
        .login(this.fixture.username, this.fixture.password)
        .navigateToAddNewSavingAccount()
        .addNewSavingAccount(accountName, initialDeposit)
        .verifyAccountIsAdded(accountName, initialDeposit);

      leftPanel
        .navigateToWithdrawAmount()
        .withdrawAmount(accountName, withdrawAmount)
        .verifySavingTrascationIsSucessfull(withdrawAmount, 4900);
    });
  });
});
