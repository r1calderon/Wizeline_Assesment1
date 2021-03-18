import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Contants'

fixture('Logout feature testing')
    .page `https://www.saucedemo.com/`

test('Logout from product´s page', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.sideMenuButton)
    await t.click(ProductsPage.logoutButton)

    await t.expect(LoginPage.loginButton.exists).ok()
})
