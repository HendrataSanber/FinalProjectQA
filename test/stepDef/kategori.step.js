const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const KategoriPage = require("../pages/kategori.page");
const {faker} = require('@faker-js/faker');

Given(/^I on kategori with login$/,async () => {
    await Page.open('/');
    await LoginPage.login('hendra@kasir.com','hendrakasir');
    await browser.pause(2000);
    await KategoriPage.open('/categories/create');
});

Given(/^I on kasir aja kategori$/,async () => {
    await KategoriPage.open('/categories/create');
});

When(/^I input with valid input$/,async () => {
    const nama = faker.commerce.productName();
    const deskripsi = faker.commerce.productDescription();
    await KategoriPage.input(nama,deskripsi);
});

When(/^I input with empty name$/,async () => {
    await KategoriPage.input('',faker.commerce.productDescription());
})

Then(/^I see success message$/,async () => {
    await KategoriPage.assertSuccessMessage('item ditambahkan');
});

Then(/^I see an error name not allowed empty$/,async () => {
    await KategoriPage.assertErrorMessage('"name" is not allowed to be empty');
});
