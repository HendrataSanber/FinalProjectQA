const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const PenggunaPage = require("../pages/pengguna.page");
const {faker} = require('@faker-js/faker');

Given(/^I on pengguna with login$/,async () => {
    await Page.open('/');
    await LoginPage.login('hendra@kasir.com','hendrakasir');
    await browser.pause(2000);
    await PenggunaPage.open('/users/create');
});

Given(/^I on kasir aja pengguna$/,async () => {
    await PenggunaPage.open('/users/create');
});

When(/^I input with valid input$/,async () => {
    const nama=faker.name.firstName();
    const email=faker.internet.email();
    const password=faker.internet.password();
    await PenggunaPage.input(nama,email,password);
});

When(/^I input with invalid email$/,async () => {
    const nama=faker.name.firstName();
    const email=faker.string.alpha();
    const password=faker.internet.password();
    await PenggunaPage.input(nama,email,password);
})

When(/^I input with empty name$/,async () => {
    const nama='';
    const email=faker.internet.email();
    const password=faker.internet.password();
    await PenggunaPage.input(nama,email,password);
})

Then(/^I see success message$/,async () => {
    await PenggunaPage.assertSuccessMessage('item ditambahkan');
});

Then(/^I see error invalid email$/,async () => {
    await PenggunaPage.assertErrorMessage('"email" must be a valid email');
});

Then(/^I see an error name not allowed empty$/,async () => {
    await PenggunaPage.assertErrorMessage('"name" is not allowed to be empty');
});
