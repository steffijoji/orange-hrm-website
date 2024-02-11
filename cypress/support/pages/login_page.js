/// <reference types="cypress" />

const elements = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.orangehrm-login-button',
    requiredMessage: '.oxd-input-field-error-message',
    credentialsMessage: '.oxd-alert-content-text'
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
    },

    fillPassword(password) {
        cy.get(elements.passwordField)
            .should('be.visible')
            .type(password)
    },

    fillUsername(username) {
        cy.get(elements.usernameField)
            .should('be.visible')
            .type(username)
    },

    checkCredentialsMessage() {
        cy.get(elements.credentialsMessage)
            .should('be.visible')
            .should('have.text', 'Invalid credentials')
    },

    accessSecretPage() {
        cy.get('.oxd-userdropdown-name')
            .should('be.visible')
    }
}
