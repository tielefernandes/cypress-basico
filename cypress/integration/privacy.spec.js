Cypress._.times(5   , function () {

    it('testa a página da política de privacidade de forma independente', function () {
        cy.visit("../../CACTAT/src/privacy.html")

        cy.contains('Talking About Testing').should('be.visible')
    })
})