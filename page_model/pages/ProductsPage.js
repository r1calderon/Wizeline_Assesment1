import {Selector} from 'testcafe'

class ProductPage{
    constructor(){
        this.productTitle = Selector('.product_label')
        this.sideMenuButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')

        //this.addToCartBackpackButton = Selector('.pricebar btn_primary btn_inventory').withText('29.99')
        this.addToCartP1 = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
        this.addToCartP2 = Selector('#inventory_container > div > div:nth-child(2) > div.pricebar > button')
        this.addToCartP3 = Selector('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
    }
}

export default new ProductPage()