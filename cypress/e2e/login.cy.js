/// <reference types="cypress" />

import login_page from "../support/pages/login_page";

const login_data = require('../fixtures/login_data.json')

describe('Login', () => {

  beforeEach('Access Login Page', () => {
    login_page.accessLoginPage()
  })

  it('Login without credentials', () => {
    login_page.checkUsernameField()
    login_page.checkPasswordField()
    login_page.clickLoginButton()
    login_page.checkRequiredMessage('RequiredRequired')
  })

  it('Login without username', () => {
    login_page.checkUsernameField()
    login_page.fillPassword(login_data.valid_password)
    login_page.clickLoginButton()
    login_page.checkRequiredMessage('Required')
  })

  it('Login without password', () => {
    login_page.fillUsername(login_data.valid_username)
    login_page.checkPasswordField()
    login_page.clickLoginButton()
    login_page.checkRequiredMessage('Required')
  })

  it('Login with invalid credentials', () => {
    login_page.fillUsername(login_data.invalid_username)
    login_page.fillPassword(login_data.invalid_password)
    login_page.clickLoginButton()
    login_page.checkCredentialsMessage()
  })

  it('Login with invalid username', () => {
    login_page.fillUsername(login_data.invalid_username)
    login_page.fillPassword(login_data.valid_password)
    login_page.clickLoginButton()
    login_page.checkCredentialsMessage()
  })

  it('Login with invalid password', () => {
    login_page.fillUsername(login_data.valid_username)
    login_page.fillPassword(login_data.invalid_password)
    login_page.clickLoginButton()
    login_page.checkCredentialsMessage()
  })

  it('Login with valid credentials', () => {
    login_page.fillUsername(login_data.valid_username)
    login_page.fillPassword(login_data.valid_password)
    login_page.clickLoginButton()
    login_page.accessSecretPage()
  })
})
