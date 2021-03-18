import {Selector} from 'testcafe'

class UserInformationPage{
    constructor(){
        this.userFirstName = Selector('#first-name')
        this.userLastName = Selector('#last-name')
        this.zipCodeLabel = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorZipCodeMessage = Selector('.checkout_info_wrapper h3')
    }
}

export default new UserInformationPage()
