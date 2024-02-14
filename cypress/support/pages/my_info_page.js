/// <reference types="cypress" />

const elements = {
    myInfoMenu: '[href$="/viewMyDetails"]',
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: '[name="lastName"]'

}

export default {
    accessMyInfoPage() {
        cy.get(elements.myInfoMenu)
            .should('be.visible')
            .click()
    },

    fillFirstName(firstName) {
        cy.get(elements.firstName)
            .should('be.visible')
            .clear()
            .type(firstName)
    },

    fillMiddleName(middleName) {
        cy.get(elements.middleName)
            .should('be.visible')
            .clear()
            .type(middleName)
    },

    fillLastName(lastName) {
        cy.get(elements.lastName)
            .should('be.visible')
            .clear()
            .type(lastName)
    },
}


