export function addItem(){
    cy.get('.inventory_item_name').first().invoke('text').as('itemName')
    cy.get('.inventory_item_desc').first().invoke('text').as('itemDescription')
    cy.get('.inventory_item_price').first().invoke('text').as('itemPrice')
    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').first().click()
    cy.get('a.shopping_cart_link').find('span.shopping_cart_badge').should('have.text','1').click()
    cy.url().should('include','/cart')
    cy.contains('Your Cart')
    cy.get('.inventory_item_name').first().invoke('text').then(itemName =>{
        cy.get('@itemName').should('eq',itemName)
    })
    cy.get('.inventory_item_desc').first().invoke('text').then(description =>{
        cy.get('@itemDescription').should('eq',description)
    })
    cy.get('.inventory_item_price').first().invoke('text').then(price =>{
        cy.get('@itemPrice').should('eq',price)
    })
}
export function checkout(user){
    cy.get('#checkout').contains('Checkout').click()
    cy.url().should('include','/checkout-step-one')
    cy.get('input#first-name').type(user.firstName)
    cy.get('input#last-name').type(user.lastName)
    cy.get('input#postal-code').type(user.postCode)
    cy.get('#continue').click()
    cy.url().should('include','/checkout-step-two')
    cy.get('.summary_info').should('exist')
    cy.get('#finish').click()
    cy.url().should('include','/checkout-complete')
    cy.contains('THANK YOU FOR YOUR ORDER')
}