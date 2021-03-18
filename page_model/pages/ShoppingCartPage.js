import {Selector} from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.cartButton = Selector('.fa-shopping-cart')
        this.shoppingCarTitle = Selector('.subheader').withText('Your Cart')
        this.addedProduct = Selector('.cart_item_label')
        this.checkoutButton = Selector('.checkout_button')
    }
}

export default new ShoppingCartPage()