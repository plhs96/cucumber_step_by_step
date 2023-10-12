import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
require('../support/actions/login')
Given('Go to the login page', () => {
    cy.visit('/')
})
When('Login with data', (datatable)=>{
    const data = datatable.hashes()
    data.forEach(element => {
        const { email, password, message } = element
        cy.login(email, password)
        if (message != '') {
            cy.checkExist(message)
        }
    });
})
When('Login with {string} and {string}', (email, password)=>{
        cy.login(email, password)
})
Then('Verrify URL', () =>{
    cy.url().should('not.include', 'login')
})