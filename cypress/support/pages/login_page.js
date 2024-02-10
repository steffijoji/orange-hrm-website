/// <reference types="cypress" />

const elements = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.orangehrm-login-button',
    requiredMessage: '.oxd-input-field-error-message'
}

export default {
    accessLoginPage() {
        cy.visit('/')

        cy.get('.orangehrm-login-title')
            .should('be.visible')
            .should('have.text', 'Login')
    },

    checkUsernameField() {
        cy.get(elements.usernameField)
            .should('be.visible')
            .should('be.empty')
    },

    checkPasswordField() {
        cy.get(elements.passwordField)
            .should('be.visible')
            .should('be.empty')
    },

    clickLoginButton() {
        cy.get(elements.loginButton)
            .should('be.visible')
            .click()
    },

    checkRequiredMessage(requiredText) {
        cy.get(elements.requiredMessage)
            .should('be.visible')
            .should('have.text', requiredText)
    }
}