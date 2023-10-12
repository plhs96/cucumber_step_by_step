import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
require('../support/actions/login')
Given('Go to the login page', () => {
    cy.visit('/')
})
When('Login with {string} and {string}', (email, password)=>{
        cy.login(email, password)
})
Then('Verrify URL', () =>{
    cy.url().should('not.include', 'login')
})

Then('There is error-message: {string}', (message) =>{
    cy.checkExist(message)
})