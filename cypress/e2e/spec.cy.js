describe('goes to localhost', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})