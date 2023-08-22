Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Tiele')
    cy.get('#lastName').type('Fernandes')
    cy.get('#email').type('tiele@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})
//longText, { delay: 0 }