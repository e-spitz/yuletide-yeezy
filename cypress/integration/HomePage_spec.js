describe('HomePage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/yuletide-yeezy')
  });

  it('Should display a header component with title and tagline', () => {
    cy.get('.header').should('be.visible')
    .get('.header-title').contains('yuletide yeezy')
    .get('.header-des').contains('...for the jolly & jovial Kanye fan')
  });



})
