import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
require('../support/actions/login')
Given('Go to the login page', () => {
    cy.visit('/')
})
When('Login with valid account', ()=>{
    cy.login('organization01@yopmail.com', '87654321')
})
Then('Verrify URL', () =>{
    cy.url().should('not.include', 'login')
})