describe('Test suite', ()=>{
    it('End to End validation',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //Form Filling
        cy.get('input[name="name"]:nth-child(2)').type('username')
        cy.get('input[name="email"]').type('email@gamil.com')
        cy.get('#exampleCheck1').should('not.be.checked')
        cy.get('#exampleCheck1').check().should('be.checked')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('input[type="date"]').type('1996-09-13')

        //Ecommerce product e2e Validation
        cy.contains('Shop').click()
        const products = ["Samsung Note 8", "Blackberry"]
        products.forEach(function(element){
            cy.selectProduct(element)
        });
        cy.contains('Checkout').click()
        var sum = 0;
        cy.get('tbody tr td:nth-child(4) strong').each((element, index, list)=>{
            const amountText = element.text()
            var res = amountText.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').each((element, index, list)=>{
            const amountText = element.text()
            var res = amountText.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        
        //cy.get('.media-heading:nth-child(1)').should('have.text', 'Samsung Note 8')
        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        cy.get('.suggestions ul li  a', {timeout: 8000}).click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })

        })
    })