class KategoriPage{
    open(path){
        return browser.url(path);
    }
    get namaInput(){
        return $('#nama');
    }
    get deskripsiInput(){
        return $('#deskripsi');
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
    async input(nama,deskripsi){
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
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

module.exports = new KategoriPage()