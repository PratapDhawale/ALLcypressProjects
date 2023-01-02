export class LoginPage{

    username_txtbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_txtbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button' 

    enterurl()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

// enterUsername()
// {
//     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    
// }

// enterPassword()
// {
//     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
// }

// Or we can use as below

// enterUsername(username)
// {
//     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    
// }

// enterPassword(password)
// {
//     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    
// }
// clickLogin()
// {
//     cy.get('.oxd-button').click() 
// }

//  we can also use like this

enterUsername(username)
{
    cy.get(this.username_txtbox).type(username)
    
}

enterPassword(password)
{
    cy.get(this.password_txtbox).type(password)
    
}
clickLogin()
{
    cy.get(this.login_button).click() 
}

}