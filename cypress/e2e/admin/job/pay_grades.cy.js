import 'cypress-xpath';
import common from 'mocha/lib/interfaces/common';

const LoginPage = require('../../../page_objects/common/login_page')
const DashboardPage = require('../../../page_objects/common/dashboard_page')
const PayGradesPage = require('../../../page_objects/admin/job/pay_grades_page')

describe('Job : Pay Grades functionalities', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.login('Admin', 'admin123');
        DashboardPage.clickAdminModuleMenu();
        PayGradesPage.navigateToPayGradesPage();
    });

    let grade = 'Grade 111';
    
    it('Add Pay Grades successfully', () => {
        cy.get('button').contains('Add').click();
        PayGradesPage.submitPayGrades(grade);
        PayGradesPage.addCurrency('Sri Lanka Rupee');
        cy.get('label')
            .contains('Minimum Salary')
            .parent('div')
            .siblings('div')
            .children('input').type('1000');
        cy.get('label')
            .contains('Maximum Salary')
            .parent('div')
            .siblings('div')
            .children('input').type('5000');
        cy.get('h6')
            .contains('Add Currency')
            .parent('div')
            .find('button').contains('Save').click();
        PayGradesPage.navigateToPayGradesPage();
        cy.get('div').contains(grade).should("be.visible");
    });

    it('Failed when add same grade that already exist', () => {
        cy.get('button').contains('Add').click();
        PayGradesPage.submitPayGrades(grade);
        cy.get('.oxd-input-group > .oxd-text').contains('Already exists').should("be.visible");
    });

    it('Delete pay grade', () => {
        cy.xpath("//div[text()='"+grade+"']/../following-sibling::div/div[contains(@class,'actions')]//i[contains(@class,'trash')]")
            .click();
        cy.get('button').contains('Yes, Delete').click();
        cy.wait(2000);
        cy.get('div').contains(grade).should("not.exist");
    });
  })