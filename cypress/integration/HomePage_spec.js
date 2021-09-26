describe('HomePage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/yuletide-yeezy')
  });

  it('Should display a header component with title and tagline', () => {
    cy.get('.header').should('be.visible')
    .get('.header-title').contains('yuletide yeezy')
    .get('.header-des').contains('...for the jolly & jovial Kanye fan')
  });

  it('Should have header take user back to home on click', () => {
    cy.get('.header').click()
    cy.url().should('eq','http://localhost:3000/yuletide-yeezy')
  });

  it('Should show a side navigation bar with 4 buttons', () => {
    cy.get('.generate-aside').should('be.visible')
    .get('.gen-quote-btn').contains('generate quote')
    .get('.gen-image-btn').contains('generate image')
    .get('.save-to-fav-btn').contains('add to favorites')
    .get('.view-fav-btn').contains('view favorites')
  });

  it('Should display alert if user has not picked an image when adding to favorites', () => {
    cy.get('.gen-quote-btn').click()
    cy.get('.save-to-fav-btn').click()
    .get('.warning').contains('Add an image!')
  });

  it('Should display alert if user has not picked a quote when adding to favorites', () => {
    cy.get('.gen-image-btn').click()
    cy.get('.save-to-fav-btn').click()
    .get('.warning').contains('Add a quote!')
  });

  it('Should display alert if user tried to add same postcard to favorites', () => {
    cy.get('.gen-image-btn').click()
    cy.get('.gen-quote-btn').click()
    cy.get('.save-to-fav-btn').click()
    cy.get('.save-to-fav-btn').click()
    .get('.warning').contains('Already saved!')
  });

})
