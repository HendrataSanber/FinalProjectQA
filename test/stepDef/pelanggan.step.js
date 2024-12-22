const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const PelangganPage = require("../pages/pelanggan.page");
const {faker} = require('@faker-js/faker');

Given(/^I on pelanggan page with login$/,async () => {
    await Page.open('/');
    await LoginPage.login('hendra@kasir.com','hendrakasir');
    await browser.pause(2000);
    await PelangganPage.open('/customers/create');
});

Given(/^I on kasir aja pelanggan$/,async () => {
    await PelangganPage.open('/customers/create');
});

When(/^I input with valid input$/,async () => {
    const nama=faker.name.firstName();
    const hp=faker.string.numeric({length:12});
    const kota=faker.location.city();
    const keterangan=faker.string.alpha();
    await PelangganPage.input(nama,hp,kota,keterangan);
});

When(/^I input with invalid phone$/,async () => {
    const nama=faker.name.firstName();
    const hp=faker.string.alpha();
    const kota=faker.location.city();
    const keterangan=faker.string.alpha();
    await PelangganPage.input(nama,hp,kota,keterangan);
})

When(/^I input with empty name$/,async () => {
    const nama='';
    const hp=faker.string.numeric({length:12});
    const kota=faker.location.city();
    const keterangan=faker.string.alpha();
    await PelangganPage.input(nama,hp,kota,keterangan);
})

Then(/^I see success message$/,async () => {
    await PelangganPage.assertSuccessMessage('item ditambahkan');
});

Then(/^I see an error phone must be a number$/,async () => {
    await PelangganPage.assertErrorMessage('"phone" must be a number');
});

Then(/^I see an error name not allowed empty$/,async () => {
    await PelangganPage.assertErrorMessage('"name" is not allowed to be empty');
});
