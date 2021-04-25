import user from "../../fixtures/userInfo.json"

describe('Sign in test with different credentials', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('sign in attempt successful with correct credentials', ()=>{
        cy.signIn(user)
    })
    it('sign in attempt fails with wrong username',()=>{
        cy.get('#user-name').type(user.wrongName)
        cy.get('#password').type(user.password)
        cy.get('#login-button').click()
        cy.get('.error-message-container').contains('Epic sadface:')
    })
    it.only('sign in attempt fails with wrong password',()=>{
        cy.get('#user-name').type(user.name)
        cy.get('#password').type(user.wrongPassword)
        cy.get('#login-button').click()
        cy.get('.error-message-container').contains('Epic sadface:')
    })
})