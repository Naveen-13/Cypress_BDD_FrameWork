// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('.card-title').each((element, index, list)=>{
        if(element.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
 })

 Cypress.Commands.add('getPriceValue', (locator)=>{
    var sum = 0;
    cy.get(locator).each((element, index, list)=>{
        const amountText = element.text()
        var res = amountText.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    })
    return sum;
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })