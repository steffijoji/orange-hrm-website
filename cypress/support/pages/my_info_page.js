/// <reference types="cypress" />

const elements = {
    myInfoMenu: '[href$="/viewMyDetails"]',
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: '[name="lastName"]',
    employeeId: '#app * > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) * > input',
    otherId: '#app * > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) * > input',
    driversLicenseNumber: '#app * >  div:nth-child(2)  > div:nth-child(1) > div > div:nth-child(2) > input',
    licenseExpiryDate: '#app > *  div:nth-child(2) > div > div:nth-child(2) > div > div > input'

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

    fillEmployeeId(employeeId) {
        cy.get(elements.employeeId)
        .should('be.visible')
        .clear()
        .type(employeeId)
    },

    fillOtherId(otherId) {
        cy.get(elements.otherId)
        .should('be.visible')
        .clear()
        .type(otherId)
    },

    fillDriversLicenseNumber(driversLicenseNumber) {
        cy.get(elements.driversLicenseNumber)
        .should('be.visible')
        .clear()
        .type(driversLicenseNumber)
    },

    fillLicenseExpiryDate(licenseExpiryDate) {
        cy.get(elements.licenseExpiryDate)
        .should('be.visible')
        .clear()
        .type(licenseExpiryDate)
    }
}


