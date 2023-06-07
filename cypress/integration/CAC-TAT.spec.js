// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => {
        cy.visit('../../src/index.html')
    })

    it('verifica o título da aplicação', function() {    
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {  
        const longText = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
        
        cy.get('#firstName')
            .should('be.visible')
            .type('Gustavo')
            .should('have.value', 'Gustavo')

        cy.get('#lastName')
            .should('be.visible')
            .type('Sá')
            .should('have.value', 'Sá')

        cy.get('#email')
            .should('be.visible')
            .type('gdas2209@gmail.com')
            .should('have.value', 'gdas2209@gmail.com')

        cy.get('#open-text-area')
            .should('be.visible')
            .type(longText, {delay: 0})
            .should('have.value', longText)

        cy.get('button[type = "submit"]')
            .should('be.visible')
            .click()

        cy.get('.success')
            .should('be.visible')
        
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {   
        const longText = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
        cy.get('#firstName')
            .should('be.visible')
            .type('Gustavo')
            .should('have.value', 'Gustavo')

        cy.get('#lastName')
            .should('be.visible')
            .type('Sá')
            .should('have.value', 'Sá')

        cy.get('#email')
            .should('be.visible')
            .type('gdas2209gmail.com')

        cy.get('#open-text-area')
            .should('be.visible')
            .type(longText, {delay: 0})
            .should('have.value', longText)

        cy.get('button[type = "submit"]')
            .should('be.visible')
            .click()

        cy.get('.error')
            .should('be.visible')
        
    })

    it('campo continua vazio quando preenchido com valores não numéricos', function() {    
        cy.get('#phone')
            .type('abcdefg')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {    
        const longText = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
        cy.get('#firstName')
            .should('be.visible')
            .type('Gustavo')
            .should('have.value', 'Gustavo')

        cy.get('#lastName')
            .should('be.visible')
            .type('Sá')
            .should('have.value', 'Sá')

        cy.get('#email')
            .should('be.visible')
            .type('gdas2209@gmail.com')

        cy.get('#phone-checkbox')
            .should('be.visible')
            .check()

        cy.get('#open-text-area')
            .should('be.visible')
            .type(longText, {delay: 0})
            .should('have.value', longText)

        cy.get('button[type = "submit"]')
            .should('be.visible')
            .click()

        cy.get('.error')
            .should('be.visible')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {  
        
        cy.get('#firstName')
            .should('be.visible')
            .type('Gustavo')
            .should('have.value', 'Gustavo')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .should('be.visible')
            .type('Sá')
            .should('have.value', 'Sá')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .should('be.visible')
            .type('gdas2209@gmail.com')
            .should('have.value', 'gdas2209@gmail.com')
            .clear()
            .should('have.value', '')

        cy.get('#phone')
            .should('be.visible')
            .type('123456789')
            .should('have.value', '123456789')
            .clear()
            .should('have.value', '')
        
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {   
        cy.get('button[type = "submit"]')
            .should('be.visible')
            .click()

        cy.get('.error')
            .should('be.visible')
        
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {    
        const fields = {
            name: 'Gustavo',
            lastName: 'Sá',
            email: 'gdas2209@gmail.com',
            helpText: 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, ',
          }

        cy.fillMandatoryFieldsAndSubmit(fields)
        
    })

    it('seleciona um produto (YouTube) por seu texto', function() {   
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
        
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {   
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
        
    })

    it('seleciona um produto (Blog) por seu índice', function() {   
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
        
    })

    it('marca o tipo de atendimento "Feedback"', function() {   
        cy.get('input[type="radio"]')
            .check('feedback')
            .should('have.value', 'feedback')
        
    })

    it('marca cada tipo de atendimento"', function() {   
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
        
    })

    it('marca ambos checkboxes, depois desmarca o último"', function() {   
        cy.get('input[type="checkbox"]')
            .should('have.length', 2)
            .each(function($checkbox){
                cy.wrap($checkbox).check()
                cy.wrap($checkbox).should('be.checked')
            }).last().uncheck().should('not.be.checked')
        
    })

    it('seleciona um arquivo da pasta fixtures', function() {   
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json')
            .should(function($input){
                console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
        
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {   
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function($input){
                console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
        
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json', { encoding: null }).as('myFixture')   
        cy.get('input[type="file"]')
            .selectFile('@myFixture')
            .should(function($input){
                console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
        
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Talking About Testing').should('be.visible')
        
    })

    

  })