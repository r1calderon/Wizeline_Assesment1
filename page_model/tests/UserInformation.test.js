import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Contants'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import UserInformationPage from '../pages/UserInformationPage'
import CheckOutPage from '../pages/CheckOutPage'
import FinishPage from '../pages/FinishPage'

fixture('Logout feature testing')
    .page `https://www.saucedemo.com/`


test('Continue with missing Zip code information', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.addToCartP1)
    await t.click(ShoppingCartPage.cartButton)
    await t.click(ShoppingCartPage.checkoutButton)
    await t.typeText(UserInformationPage.userFirstName, CREDENTIALS.USER_INFORMATION.FIRST_NAME)
    await t.typeText(UserInformationPage.userLastName, CREDENTIALS.USER_INFORMATION.LAST_NAME)
    await t.click(UserInformationPage.continueButton)

    await t.expect(UserInformationPage.errorZipCodeMessage.exists).ok()
    await t.expect(UserInformationPage.errorZipCodeMessage.innerText).eql('Error: Postal Code is required')
 
})

test('Fill user´s information', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.addToCartP1)
    await t.click(ShoppingCartPage.cartButton)
    await t.click(ShoppingCartPage.checkoutButton)
    await t.typeText(UserInformationPage.userFirstName, CREDENTIALS.USER_INFORMATION.FIRST_NAME)
    await t.typeText(UserInformationPage.userLastName, CREDENTIALS.USER_INFORMATION.LAST_NAME)
    await t.typeText(UserInformationPage.zipCodeLabel, CREDENTIALS.USER_INFORMATION.ZIP_CODE)
    await t.click(UserInformationPage.continueButton)

    await t.expect(CheckOutPage.checkoutTitle.exists).ok()
 
})

test('Complete a purchase', async t => {
    await LoginPage.loginSubmit(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.click(ProductsPage.addToCartP1)
    await t.click(ShoppingCartPage.cartButton)
    await t.click(ShoppingCartPage.checkoutButton)
    await t.typeText(UserInformationPage.userFirstName, CREDENTIALS.USER_INFORMATION.FIRST_NAME)
    await t.typeText(UserInformationPage.userLastName, CREDENTIALS.USER_INFORMATION.LAST_NAME)
    await t.typeText(UserInformationPage.zipCodeLabel, CREDENTIALS.USER_INFORMATION.ZIP_CODE)
    await t.click(UserInformationPage.continueButton)
    await t.click(CheckOutPage.finishButton)

    await t.expect(FinishPage.finishTitle.exists).ok()
 
})






