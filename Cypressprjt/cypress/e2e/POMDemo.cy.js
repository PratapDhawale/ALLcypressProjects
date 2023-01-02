import {LoginPage} from "./pages/login_page"

const lp = new LoginPage()


it('POM Demo', () => {

        

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // cy.contains('username').click().type('Admin')
    // cy.contains('password').click().type('admin123')
    // cy.contains('login').click()

})