/// <reference types="cypress" />

export default {
    accessLoginPage() {
        cy.visit('/')

        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title')
            .should('be.visible')
            .should('have.text', 'Login')
    }
}