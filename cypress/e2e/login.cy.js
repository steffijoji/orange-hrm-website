/// <reference types="cypress" />

import login_page from "../support/pages/login_page";

describe('Login', () => {

  beforeEach('Access Login Page', () => {
    login_page.accessLoginPage()
  })

  it.only('Login without username and password', () => {

  })
  
})