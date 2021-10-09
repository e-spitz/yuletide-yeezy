describe("Login Page", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
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

  it('Should display a message when neez button is clicked', () => {
    cy.get('.no').click()
    .get('h3')
    .contains('So sorry! Yeezy says yous ain\'t old enough to enter.')
  });

  it('Should go to home page when yeez button is clicked', () => {
    cy.get('.yes').click()
    .get('.home').should('be.visible')
  });

});
