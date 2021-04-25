import user from "../../fixtures/userInfo.json"
import * as basket from "../../page.modules/basket.js"

describe('Adding and removing items from the basket ',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.signIn(user)
    })
    afterEach(()=>{
        cy.logout()
    })
    it("add an item to the basket then continue shopping",()=>{
        basket.addItem() 
        cy.get('button[name="continue-shopping"]').click()
        cy.url().should('include','/inventory')
        cy.title().should('eq','Swag Labs')
    })
    it("add an item to the basket then checkout",()=>{
        basket.addItem()
        basket.checkout(user)
    })    
    it("remove item from the basket",()=>{
        basket.addItem()
        cy.get('button.btn').contains('Remove').click()
        cy.get('.removed_cart_item').should('exist')
    })
})