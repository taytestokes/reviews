describe('ReviewsList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should paginate through user reviews', () => {
    cy.get('[data-testid=reviewsList]').should('have.length', 1)
    cy.get('[data-testid=reviewsList] button').contains('Previous').should('be.disabled')
    cy.get('[data-testid=reviewsList] button').contains('Next').should('be.enabled')

    const pageOneFirstReview = cy.get('[data-testid=reviewRow]').first()

    cy.get('[data-testid=reviewsList] button').contains('Next').click()
    cy.get('[data-testid=reviewsList] button').contains('Previous').should('be.enabled')

    // Test the first review of each page against each other
    cy.get('[data-testid=reviewRow]').first().should('not.equal', pageOneFirstReview)
  })

  it('should open the review details drawer when a row is selected', () => {
    cy.get('[data-testid=reviewsList]').should('have.length', 1)
    cy.get('[data-testid=drawer]').should('not.exist')
    cy.get('[data-testid=reviewRow]').first().click()
    cy.get('[data-testid=drawer]').should('have.length', 1)
    cy.get('[data-testid=reviewCard]').should('have.length', 1)
    cy.get('[data-testid=drawer] button').click()
    cy.get('[data-testid=drawer]').should('not.exist')
  })
})
