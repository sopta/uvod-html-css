describe('Phishing Detail Page', () => {
    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.visit('/pages/phishing-detail.html')
        cy.url().should('include', '/pages/phishing-detail.html')

        cy.get('h1').contains('Phishing')
    })
})