import 'cypress-xpath';
import AdminPage from '../../common/admin_page';

class PayGradesPage {
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

    get minSalaryInput() {
        return cy.get('label')
            .contains('Minimum Salary')
            .parent('div')
            .siblings('div')
            .children('input');
    }

    get maxSalaryInput() {
        return cy.get('label')
        .contains('Maximum Salary')
        .parent('div')
        .siblings('div')
        .children('input');
    }

    get saveCurrencyBtn() {
        return cy.get('h6')
            .contains('Add Currency')
            .parent('div')
            .find('button').contains('Save');
    }

    navigateToPayGradesPage() {
        AdminPage.jobMenu.click();
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

    enterMinSalary(minSalary) {
        this.minSalaryInput.type(minSalary);
    }

    enterMaxSalary(maxSalary) {
        this.maxSalaryInput.type(maxSalary);
    }

    saveCurrency() {
        this.saveCurrencyBtn.click();
    }
}

module.exports = new PayGradesPage();