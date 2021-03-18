import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Contants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credencials', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.expect(ProductPage.productTitle.exists).ok()
})

test('Users can not login using invalid credentials', async t => {
    await t 
        .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.PASSWORD)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
    
   await t.expect(LoginPage.errorMessage.exists).ok()
   await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

