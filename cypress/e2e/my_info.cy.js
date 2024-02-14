/// <reference types="cypress" />

import login_page from "../support/pages/login_page";
import my_info_page from "../support/pages/my_info_page";
import { faker } from '@faker-js/faker';

const login_data = require('../fixtures/login_data.json')

describe('My Info', () => {

    beforeEach('Access My Info Page', () => {
        login_page.accessLoginPage()
        login_page.fillUsername(login_data.valid_username)
        login_page.fillPassword(login_data.valid_password)
        login_page.clickLoginButton()
        login_page.accessSecretPage()
        my_info_page.accessMyInfoPage()
    })

    it.only('Update Personal Details', () => {
        my_info_page.fillFirstName(faker.person.firstName())
        my_info_page.fillMiddleName(faker.person.middleName())
        my_info_page.fillLastName(faker.person.lastName())
    })
})