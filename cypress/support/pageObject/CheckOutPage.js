class CheckOutPage{
    checkOutButton(){
        return cy.contains('Checkout');
    }
    enterCountry(){
        return cy.get('#country');
    }
    checkbox(){
        return cy.get('#checkbox2');
    }
    submitButton(){
        return cy.get('input[type="submit"]');
    }
    successMessage(){
        return cy.get('.alert');
    }
    selectCountry(){
        return cy.get('.suggestions ul li  a', {timeout: 8000});
    }
}
export default CheckOutPage