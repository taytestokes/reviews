describe('TotalReviews', () => {
  it('should open the reviews drawer when the view more button is selected', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid=drawer]').should('have.length', 0)
    cy.get('[data-testid=totalReviews] button').contains('View Reviews').click()
    cy.get('[data-testid=drawer]').should('have.length', 1)
    cy.get('[data-testid=reviewCard]').should('have.length.gt', 0)
    cy.get('[data-testid=drawer] button').click()
    cy.get('[data-testid=drawer]').should('have.length', 0)
  })
})
