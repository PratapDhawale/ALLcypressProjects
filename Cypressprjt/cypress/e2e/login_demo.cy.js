import { LoginPage } from "./pages/login_page";

var lp = new LoginPage()

beforeEach(function () {
    lp.enterurl()
})

describe('All Login Tets', () => {

    // beforeEach(function () {
    //     lp.enterurl()
    // })
    it('login with valid credentials', () => {

        // lp.enterurl()
        lp.enterUsername('Admin')
        lp.enterPassword('admin123')
        lp.clickLogin()
        cy.get('.oxd-userdropdown-img').click()
    })

    it('login with invalid username', () => {

        // lp.enterurl()
        lp.enterUsername('Admin123')
        lp.enterPassword('admin123')
        lp.clickLogin()
        cy.get('.oxd-userdropdown-img').click()
    })

})

it('login with invalid password', () => {

    // lp.enterurl()
    lp.enterUsername('Admin')
    lp.enterPassword('admin456')
    lp.clickLogin()
    cy.get('.oxd-userdropdown-img').click()
})
