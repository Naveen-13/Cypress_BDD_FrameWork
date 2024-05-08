class ShopPage{
    checkoutButton(){
        return cy.contains('Checkout');
    }

    getcartItems(){
        return cy.get('tbody tr td:nth-child(4) strong');
    }
    getTotalPrice(){
        return cy.get('h3 strong');
    }
}
export default ShopPage