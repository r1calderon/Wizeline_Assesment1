import {Selector} from 'testcafe'

class CheckOutPage{
    constructor(){
        this.checkoutTitle = Selector('.subheader').withText('Checkout: Overview')
        this.finishButton = Selector('.cart_button').withText('FINISH')
    }
}

export default new CheckOutPage()