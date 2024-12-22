class PenggunaPage{
    open(path){
        return browser.url(path);
    }
    get namaInput(){
        return $('#nama');
    }
    get emailInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#password');
    }
    get submitButton(){
        return $('//button[text()="simpan"]');
    }
    get successMsg(){
        return $('(//*[@role="alert"]/div/div[2])[1]');
    }
    get errorMsg(){
        return $('//*[@role="alert"]');
    }
    async input(nama,email,password){
        await this.namaInput.setValue(nama);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
    async assertSuccessMessage(expectedSuccessMessage){
        await expect(this.successMsg).toHaveText(expectedSuccessMessage);
    }
    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveText(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new PenggunaPage()