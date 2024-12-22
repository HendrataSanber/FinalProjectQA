class PelangganPage{
    open(path){
        return browser.url(path);
    }
    get namaInput(){
        return $('#nama');
    }
    get hpInput(){
        return $('//input[@id="no.hp"]');
    }
    get alamatInput(){
        return $('#alamat');
    }
    get keteranganInput(){
        return $('#keterangan');
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
    async input(nama,hp,alamat,keterangan){
        await this.namaInput.setValue(nama);
        await this.hpInput.setValue(hp);
        await this.alamatInput.setValue(alamat);
        await this.keteranganInput.setValue(keterangan);
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

module.exports = new PelangganPage()