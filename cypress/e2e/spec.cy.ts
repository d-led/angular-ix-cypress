describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.burger-menu-button').click()
    cy.get('li').contains('Main')
  })
})
