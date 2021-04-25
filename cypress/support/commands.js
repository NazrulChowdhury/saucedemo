Cypress.Commands.add('signIn',(user)=>{
    cy.get('#user-name').type(user.name)
    cy.get('#password').type(user.password)
    cy.get('#login-button').click()
    cy.url().should('include', "/inventory")
    cy.title().should('eq', 'Swag Labs')
})