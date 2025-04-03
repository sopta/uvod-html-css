describe('Phishing Detail Page', () => {
    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.visit('/pages/spear-phishing-detail.html')
        cy.url().should('include', '/pages/spear-phishing-detail.html')

        cy.get('h1').contains('Spear Phishing')
    })
})