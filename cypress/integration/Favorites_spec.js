describe('Favorites Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
  });

  it('Should display the home header', () => {
    cy.get('.header').should('be.visible')
  });

  it('Should display a message if no favorites exist', () => {
    cy.get('.no-fav-header')
    .get('h2').contains('No favorites yet. Go CREATE!')
  });

  it('Should contain a link to return user to home page',  () => {
    cy.get('.no-fav-header')
    .get('h2')
    .get('.create-link').click()
    .get('.home').should('be.visible')
  });

  it('Should display cards if favorites exist', () => {
    cy.visit('http://localhost:3000/yuletide-yeezy')
    .get('.gen-image-btn').click()
    .get('.gen-quote-btn').click()
    .wait(2000)
    .get('.save-to-fav-btn').click()
    cy.get('.view-fav-btn').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
    cy.wait(2000)
    .get('.card-container').get('.fav-card').get('.card-quote').get('p').get('.remove-btn')
  });


})
