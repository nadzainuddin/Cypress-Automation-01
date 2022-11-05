class PayGradesPage {
    get adminModuleMenu() {
        return cy.get('a[href*="viewAdminModule"]');
    }

    get jobMenu() {
        return cy.get('span').contains('Job');
    }

    get payGradesSubMenu() {
        return cy.get('a').contains('Pay Grades');
    }

    get payGradesInput() {
        return cy.get('label').contains('Name').parent('div')
            .siblings('div').children('input');
    }

    get payGradesSubmitBtn() {
        return cy.get('button[type="submit"]');
    }

    get addCurrencyBtn() {
        return cy.get('h6')
            .contains('Currencies')
            .siblings('button')
            .contains('Add');
    }

    get currencyDropdown() {
        return cy.get('div').contains('Select');
    }

    navigateToPayGradesPage() {
        this.adminModuleMenu.click();
        this.jobMenu.click();
        this.payGradesSubMenu.click();
    }

    submitPayGrades(paygrades) {
        this.payGradesInput.type(paygrades);
        this.payGradesSubmitBtn.click();
    }

    addCurrency(currency) {
        this.addCurrencyBtn.click();
        this.currencyDropdown.click();
        cy.get('div').contains(currency).click();
    }

    enterMinimumSalary(minSalary) {

    }

    enterMaxSalary(maxSalary) {

    }

    saveCurrency() {

    }

    deletePayGrades() {
        
    }
}

module.exports = new PayGradesPage();