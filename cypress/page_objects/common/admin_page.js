class AdminPage {
    get jobMenu() {
        return cy.get('span').contains('Job');
    }

    get organizationMenu() {
        return cy.get('span').contains('Organization');
    }

    get qualificationsMenu() {
        return cy.get('span').contains('Qualifications');
    }

    get nationalitiesMenu() {
        return cy.get('a').contains('Nationalities');
    }

    get corpBrandingMenu() {
        return cy.get('a').contains('Corporate Branding');
    }

    get configMenu() {
        return cy.get('span').contains('Configuration');
    }
}

module.exports = new AdminPage();