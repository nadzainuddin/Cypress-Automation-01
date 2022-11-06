class DashboardPage {
    get adminModuleMenu() {
        return cy.get('a[href*="viewAdminModule"]');
    }

    clickAdminModuleMenu() {
        this.adminModuleMenu.click();
    }
}

module.exports = new DashboardPage();