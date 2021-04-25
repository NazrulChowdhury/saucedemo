import user from "../../fixtures/userInfo.json"

describe('Sign in test with correct and incorrect credentials', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Log in attempt successful with correct credentials', ()=>{
        cy.get('#user-name').type(user.name)
        cy.get('#password').type(user.password)
        cy.get('input[type = "submit"]').should('have.text', 'LOGIN ').click()
        cy.url().should('include', "/inventory")
        cy.title().should('eq', 'Swag Labs')
    })
})