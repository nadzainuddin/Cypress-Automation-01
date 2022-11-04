
describe('Verify Login Page UI', () => {
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  
  it('Check input visibility', () => {
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[class*=orangehrm-login-button]').should("be.visible");
    cy.get('.orangehrm-login-forgot').should("be.visible");
  });
  
  it('Verify error message on empty username and password', () => {
    cy.get('button[class*=orangehrm-login-button]').click();
    cy.get('input[name="username"]')
      .parent('div')
      .siblings('span')
      .contains('Required').should("be.visible");
    cy.get('input[name="password"]')
      .parent('div')
      .siblings('span')
      .contains('Required').should("be.visible");
  });

  it('Verify error message on incorrect username and password', () => {
    cy.get('button[class*=orangehrm-login-button]').click();
    cy.get('input[name="username"]')
      .parent('div')
      .siblings('span')
      .contains('Required').should("be.visible");
    cy.get('input[name="password"]')
      .parent('div')
      .siblings('span')
      .contains('Required').should("be.visible");
  });
})