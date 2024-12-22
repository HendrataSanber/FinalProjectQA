class LoginPage{
    get usernameInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#password');
    }
    get loginButton(){
        return $('//button[@type="submit"]');
    }
    get errorMsg(){
        return $('//*[@role="alert"]');
    }
    
    async isLoginPage() {
        return await this.usernameInput.isExisting();
    }

    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveText(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();