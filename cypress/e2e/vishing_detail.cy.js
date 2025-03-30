describe('Vishing Detail Page', () => {
    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.visit('/pages/vishing-detail.html')
        cy.url().should('include', '/pages/vishing-detail.html')
  
        cy.get('h1').contains('Vishing')
    })
})