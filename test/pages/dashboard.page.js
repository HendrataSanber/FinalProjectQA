class DashboardPage{
    get dashboardPageUrl(){
        return 'https://kasiraja.ajikamaludin.id/dashboard';
    }

    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }
}

module.exports = new DashboardPage();