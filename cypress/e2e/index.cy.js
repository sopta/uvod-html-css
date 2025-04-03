describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('otevru stranku a vidim hlavni nadpis', () => {
        cy.url().should('include', '/')
        cy.get('h1').contains('Phishing: Nebezpečí digitálního podvodu')
    })

    it('kontrola důležitého formátování "kybernetický útok" a "vylákat citlivé informace"', () => {
        cy.contains('h2', 'Co je to phishing?')
            .next('p')
            .find('i')
            .should('have.text', 'kybernetický útok')

        cy.contains('h2', 'Co je to phishing?')
            .next('p')
            .find('b')
            .should('have.text', 'vylákat citlivé informace')
    })

    it('zobrazí sekci "Co je to phishing?" s odstavcem', () => {
        cy.get('h2').contains('Co je to phishing?')
        cy.contains('Phishing je').should('exist')
    })

    it('zobrazí seznam typických znaků phishingového útoku', () => {
        cy.get('h2').contains('Typické znaky phishingového útoku')
        cy.get('ul').first().within(() => {
            cy.contains('Neobvyklá e-mailová adresa odesílatele')
            cy.contains('Naléhavé výzvy k akci')
        })
    })

    it('zobrazí dva sloupce s příklady a obranou', () => {
        cy.get('.columns').within(() => {
            cy.get('.column').should('have.length', 2)
            cy.contains('Příklady phishingových zpráv')
            cy.contains('Obranné strategie')
        })
    })

    it('zobrazí obrázek phishingového e-mailu', () => {
        cy.get('h2').contains('Ukázkový obrázek phishingového e-mailu')
        cy.get('img[src="images/ukazka.png"]').should('exist')
    })

    it('zobrazí tabulku s porovnáním útoků', () => {
        cy.get('table').should('exist')
        cy.get('thead').within(() => {
            cy.contains('Typ útoku')
            cy.contains('Cíl útočníka')
            cy.contains('Příklad')
        })
        cy.get('tbody').within(() => {
            cy.contains('Phishing')
            cy.contains('Spear Phishing')
            cy.contains('Vishing')
            cy.contains('Smishing')
        })
    })

    it('ověří odkazy ve sloupci "Typ útoku"', () => {
        cy.get('a[href="pages/phishing-detail.html"]').should('exist')
        cy.get('a[href="pages/spear-phishing-detail.html"]').should('exist')
        cy.get('a[href="pages/vishing-detail.html"]').should('exist')
        cy.get('a[href="pages/smishing-detail.html"]').should('exist')
    })

    it('zobrazí závěrečnou sekci', () => {
        cy.get('h2').contains('Závěr')
        cy.contains('Phishing je').should('exist')
    })
})