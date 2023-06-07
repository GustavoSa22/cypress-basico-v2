// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', fields => {
    cy.get('#firstName')
            .should('be.visible')
            .type(fields.name)
            .should('have.value', fields.name)

    cy.get('#lastName')
        .should('be.visible')
        .type(fields.lastName)
        .should('have.value', fields.lastName)

    cy.get('#email')
        .should('be.visible')
        .type(fields.email)
        .should('have.value', fields.email)

    cy.get('#open-text-area')
        .should('be.visible')
        .type(fields.helpText, {delay: 0})
        .should('have.value', fields.helpText)

    cy.get('button[type = "submit"]')
        .should('be.visible')
        .click()

    cy.get('.success')
        .should('be.visible')
  })
