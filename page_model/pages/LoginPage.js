import {Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.login-box h3')
    }

    async loginSubmit(username, password){
        await t
        .typeText(this.userNameField, username, {paste:true}) 
        .typeText(this.passwordField, password, {paste:true})
        .click(this.loginButton)
    }
}

export default new LoginPage()