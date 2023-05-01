describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('ix-burger-menu').click()
    cy.get('li').contains('Main')
  })
})
