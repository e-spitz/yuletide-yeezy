describe("Login Page", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should show a header for login page', () => {
    cy.get('h1').should('be.visible')
    .contains('tis the yeeson')
    .get('p')
    .contains('Kanye wants to know...')
    .get('p')
    .contains('ARE YOU 18 YEARS OF AGE OR OLDER?')
  });

  it('Should have two buttons displayed', () => {
    cy.get('button').should('be.visible')
    .contains('yeez')
    .get('button')
    .contains('neez')
  });

});
