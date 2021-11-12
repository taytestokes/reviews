describe('Barchart', () => {
  it('should open the reviews drawer when a bar is selected using a click', () => {
    cy.visit('http://localhost:3000')

    cy.get('[aria-label="Select to view reviews with a rating of 1"]').click()
    cy.get('[data-testid=drawer]').should('have.length', 1)
    cy.get('[data-testid=reviewCard]').should('have.length.gt', 0)
    cy.get('[data-testid=drawer] button').click()
    cy.get('[data-testid=drawer]').should('have.length', 0)
  })
})
