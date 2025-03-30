describe('Home Page', () => {
    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.visit('/')
        cy.url().should('include', '/')

        cy.get('h1').contains('Phishing: Nebezpečí digitálního podvodu')
    })
})