describe('Error Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/yuletide-yeez')
  });

  it('Should display the home header', () => {
    cy.get('.header').should('be.visible').click()
    .url().should('eq','http://localhost:3000/yuletide-yeezy')
  });

  it('Should display a 404 image in main view area', () => {
    cy.get('.error-404')
    .get('.error-img')
  });

  it('Image should be a link to take user back to home page', () => {
    cy.get('.error-img').click()
    .url().should('eq', 'http://localhost:3000/yuletide-yeezy')
  });

})
