describe('Smishing Detail Page', () => {
    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.visit('/pages/smishing-detail.html')
        cy.url().should('include', '/pages/smishing-detail.html')

        cy.get('h1').contains('Smishing')
    })
})