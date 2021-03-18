import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Contants'
import ShoppingCartPage from '../pages/ShoppingCartPage'

fixture('Logout feature testing')
    .page `https://www.saucedemo.com/`

test('Logout from product´s page', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ShoppingCartPage.cartButton)

    await t.expect(ShoppingCartPage.shoppingCarTitle.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.addToCartP1)
    await t.click(ShoppingCartPage.cartButton)

    await t.expect(ShoppingCartPage.addedProduct.exists).ok()
})


test('Add multiple items to the shopping cart', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.addToCartP1)
    await t.click(ProductsPage.addToCartP2)
    await t.click(ProductsPage.addToCartP3)
    await t.click(ShoppingCartPage.cartButton)

    await t.expect(ShoppingCartPage.addedProduct.exists).ok()
})



