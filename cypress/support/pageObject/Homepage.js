class HomePage{
    enterName(){
        return cy.get('input[name="name"]:nth-child(2)');
    }
    enterEmail(){
        return cy.get('input[name="email"]');
    }
    checkbox(){
        return cy.get('#exampleCheck1');
    }
    genderSelection(){
        return cy.get('#exampleFormControlSelect1');
    }
    enterDate(){
        return cy.get('input[type="date"]');
    }
    shopButton(){
        return cy.contains('Shop');
    }
    submitButton(){
        return cy.get('input[type="submit"]')
    }
    successMessage(){
        return cy.get('.alert');
    }
}
export default HomePage