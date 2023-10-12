Cypress.Commands.add('types', (locators = [], values = []) => {

    for (let index = 0; index < locators.length; index++) {
        const locator = locators[index]
        const value = values[index]
        cy.xpath(locator).should('exist').then(() => {
            cy.xpath(locator).focus().clear()
            if (value != null && value != 'null') {
                cy.xpath(locator).focus().type(value)
            }


        })
    }
})

Cypress.Commands.add('clicks', (...locators) => {
    locators.forEach(locator => {
        cy.xpath(locator).should('exist').then(() =>
            cy.xpath(locator).scrollIntoView().click({ force: true }))
    })
})

Cypress.Commands.add('checkExist', (...texts) => {
    texts.forEach(text => {
        const element = cy.xpath("//*[normalize-space(text())='" + text + "']")
        element.should('exist')
    });
})
Cypress.Commands.add('checkNoExist', (...texts) => {
    texts.forEach(text => {
        const element = cy.xpath("//*[normalize-space(text())='" + text + "']")
        element.should('not.exist')
    });
})

Cypress.Commands.add('checkCountMessage', (message, time) => {
    cy.xpath("//*[normalize-space(text())='" + message + "']").should('have.length', time)
})
