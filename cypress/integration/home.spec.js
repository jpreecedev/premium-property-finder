context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should set the price and the number of properties should update accordingly', () => {
    cy.get('#price-from')
      .type('1000000')
      .should('have.value', '1000000')

    cy.get('[data-cy="property-count"]').should(
      'contain',
      '5 private properties for sale'
    )

    cy.get('#postcode')
      .select('M3')
      .should('have.value', 'm3')

    cy.get('[data-cy="property-count"]').should(
      'contain',
      '3 private properties for sale'
    )

    cy.get('#postcode')
      .select('M3')
      .should('have.value', 'm3')

    cy.get('[data-cy="clear-button"]').click()

    cy.get('[data-cy="property-count"]').should(
      'contain',
      '6 private properties for sale'
    )
  })
})
