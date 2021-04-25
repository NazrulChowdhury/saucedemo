Cypress.Commands.add('signIn',(user)=>{
    cy.get('#user-name').type(user.name)
    cy.get('#password').type(user.password)
    cy.get('#login-button').click()
    cy.url().should('include', "/inventory")
    cy.title().should('eq', 'Swag Labs')
})
Cypress.Commands.add('logout',()=>{
    cy.get('button#react-burger-menu-btn').click()
    cy.get('a#logout_sidebar_link').should('have.text','Logout').click()
    cy.get('#login-button').should('exist')
})