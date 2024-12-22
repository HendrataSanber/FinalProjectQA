const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const PelangganPage = require("../pages/pelanggan.page");
const DashboardPage = require("../pages/dashboard.page");
const {faker} = require('@faker-js/faker');

Given(/^I on kasir aja login page$/,async () => {
    await Page.open('/');
});

Given(/^I on kasir aja pelanggan page$/,async () => {
    await Page.open('/');
    await LoginPage.login('hendra@kasir.com','hendrakasir');
    await PelangganPage.open('/customers/create');
});

Given(/^I on kasir aja pelanggan x$/,async () => {
    await PelangganPage.open('/customers/create');
});

When(/^I login with valid credentials$/,async () => {
    await LoginPage.login('hendra@kasir.com','hendrakasir');
});

When(/^I login with (.*) and (.+)$/,async (username,password) => {
    if(username=='<invalidEmail>'){
        username = faker.name.firstName();
    }
    await LoginPage.login(username,password);
})

Then(/^I redirect to dashboard page$/,async () => {
    await DashboardPage.assertDashboardUrl();
});

Then(/^I should see an error (.+)$/,async (message) => {
    console.log(`Expecting error message: "${message}"`);
    await LoginPage.assertErrorMessage(message);
});
