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

  it('Should display alert if user has not picked an quote when adding to favorites', () => {
    cy.get('.save-to-fav-btn').click()
    .get('.warning').contains('Add a quote!')
    .get('.gen-quote-btn').click()
    .get('.save-to-fav-btn').click()
  });

  it('Should display an add an image alert', () => {
    cy.get('.gen-quote-btn').click()
    cy.wait(2000)
    cy.get('.save-to-fav-btn').click()
    cy.get('.warning').contains('Add an image!')
  })

  it('Should display alert if user tried to add same postcard to favorites', () => {
    cy.get('.gen-image-btn').click()
    cy.get('.gen-quote-btn').click()
    cy.wait(2000)
    cy.get('.save-to-fav-btn').click().click()
    .get('.warning').contains('Already saved!')
  });

  it('Should display favorites when clicking view favorites button', () => {
    cy.get('.view-fav-btn').click()
    .get('.card-container').should('be.visible')
  });

  it('Should render a random quote when generate quote button is clicked', () => {
    cy.intercept('GET', 'https://api.kanye.rest', {
      statusCode: 200,
      body: {
        quote: "This is a great Kanye quote."
      }
    }).as('stub1')
    cy.get('.gen-quote-btn').click()
    .get('.postcard-container')
    .get('.postcard')
    .get('.quote-box').contains("This is a great Kanye quote.")
  });

  it('Should render an error message if fetch request fails', () => {
    cy.intercept('GET', 'https://api.kanye.rest', {
      statusCode: 404
    }).as('stub1')
    cy.get('.gen-quote-btn').click()
    .get('.postcard-container')
    .get('.postcard')
    .get('.error').contains("Kanye couldn't deliver. Check back later!")
  });

  it('Should display a basic postcard template on load', () => {
    cy.get('.postcard-container')
    .get('.postcard')
    .get('.quote-box').contains('Quote goes here...')
    .get('.image-box').should('be.visible')
  })

})
