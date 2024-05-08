import CheckOutPage from "../../support/pageObject/CheckOutPage"
import HomePage from "../../support/pageObject/Homepage"
import ShopPage from "../../support/pageObject/ShopPage"

describe('Test suite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('End to End validation', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const homepage = new HomePage()
        const shopPage = new ShopPage()
        const checkoutpage = new CheckOutPage()
        //Form Filling
        homepage.enterName().type(this.data.name)
        homepage.enterEmail().type('email@gamil.com')
        homepage.checkbox().should('not.be.checked')
        homepage.checkbox().check().should('be.checked')
        homepage.genderSelection().select('Female')
        homepage.enterDate().type('1996-09-13')
        //Ecommerce product e2e Validation
        homepage.shopButton().click()
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
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
})