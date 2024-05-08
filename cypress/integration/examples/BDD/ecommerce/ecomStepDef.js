import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import CheckOutPage from "../../../../support/pageObject/CheckOutPage"
import HomePage from "../../../../support/pageObject/Homepage"
import ShopPage from "../../../../support/pageObject/ShopPage"

const homepage = new HomePage()
const shopPage = new ShopPage()
beforeEach(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})

Given('I Open the test link', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I add items to cart', function () {
    homepage.shopButton().click()
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });
})

Then('validate the total price', () => {

    shopPage.checkoutButton().click()
    var sum = 0;
    shopPage.getcartItems().each((element, index, list) => {
        const amountText = element.text()
        var res = amountText.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    })
    shopPage.getTotalPrice().each((element, index, list) => {
        const amountText = element.text()
        var res = amountText.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then('select the countery and verify the end message', () => {
    const checkoutpage = new CheckOutPage()
    checkoutpage.checkOutButton().click()
    checkoutpage.enterCountry().type('india')
    checkoutpage.selectCountry().click()
    checkoutpage.checkbox().click({ force: true })
    checkoutpage.submitButton().click()
    checkoutpage.successMessage().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})

When('I fill the form', function (dataTable) {
    // homepage.enterName().type(this.data.name)
    // homepage.enterEmail().type(this.data.email)
    homepage.enterName().type(dataTable.rawTable[1][0])
    homepage.enterEmail().type(dataTable.rawTable[1][1])
    homepage.checkbox().should('not.be.checked')
    homepage.checkbox().check().should('be.checked')
    homepage.genderSelection().select('Female')
    homepage.enterDate().type('1996-09-13')
})

Then('submit the form and validate the message', function () {
    homepage.submitButton().click()
    homepage.successMessage().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes('Success!')).to.be.true
    })
})