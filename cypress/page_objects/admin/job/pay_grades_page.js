class PayGradesPage {
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
            .next('button')
            .contains('Add');
    }

    get currencyDropdown() {
        return cy.get('div').contains('Select');
    }

    navigateToPayGradesPage() {
        this.jobMenu.click();
        this.payGradesSubMenu.click();
    }

    submitPayGrades(paygrades) {
        this.payGradesInput.type(paygrades);
        this.payGradesSubmitBtn.click();
    }

    addCurrency(currency) {
        cy.wait(2000);
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