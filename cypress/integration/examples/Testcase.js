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
        cy.selectProduct('Samsung Note 8')
        cy.contains('Checkout').click()
        cy.get('.media-heading:nth-child(1)').should('have.text', 'Samsung Note 8')
        cy.contains('Checkout').click()
        cy.get('#country').type('ind')
        cy.get('.suggestions ul li  a', {timeout: 8000}).each((element, index, list)=>{
            if(element.text().includes('Indonesia')){
                cy.get(element).eq(index).click()
            
            }
        })


        


    })
})