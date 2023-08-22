/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(function () {
        cy.visit("../../CACTAT/src/index.html")
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Curso de teste automatizado com cypress, Curso de teste automatizado com cypress'

        cy.get('#firstName').type('Tiele')
        cy.get('#lastName').type('Fernandes')
        cy.get('#email').type('tiele@exemplo.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com email com formatação inválida', function () {
        const longText = 'Curso de teste automatizado com cypress, Curso de teste automatizado com cypress'

        cy.get('#firstName').type('Tiele')
        cy.get('#lastName').type('Fernandes')
        cy.get('#email').type('tiele@exemplo,com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function () {
        cy.get('#phone')
            .type('abcdef')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o campo telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        const longText = 'Curso de teste automatizado com cypress, Curso de teste automatizado com cypress'

        cy.get('#firstName').type('Tiele')
        cy.get('#lastName').type('Fernandes')
        cy.get('#email').type('tiele@exemplo,com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Tiele')
            .should('have.value', 'Tiele')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Fernandes')
            .should('have.value', 'Fernandes')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('teste@teste.com')
            .should('have.value', 'teste@teste.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('123456')
            .should('have.value', '123456')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })
})