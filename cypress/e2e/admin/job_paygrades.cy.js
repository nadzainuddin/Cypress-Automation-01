import 'cypress-xpath';

const LoginPage = require('../../page_objects/common/login_page')
const DashboardPage = require('../../page_objects/common/dashboard_page')
const PayGradesPage = require('../../page_objects/admin/job/pay_grades_page')

describe('Verify Job Pay Grades Page functionalities', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.login('Admin', 'admin123');
        DashboardPage.clickAdminModuleMenu();
        PayGradesPage.navigateToPayGradesPage();
    });

    let grade = 'Grade 111';
    const deletePaygradeBtn = "//div[text()='"+grade+"']/../following-sibling::div/div[contains(@class,'actions')]//i[contains(@class,'trash')]";
    
    it('Add Pay Grades successfully', () => {
        cy.get('button').contains('Add').click();
        PayGradesPage.submitPayGrades(grade);
        PayGradesPage.addCurrency('Sri Lanka Rupee');
        PayGradesPage.enterMinSalary('1000');
        PayGradesPage.enterMaxSalary('5000');
        PayGradesPage.saveCurrency();
        PayGradesPage.navigateToPayGradesPage();
        cy.get('div').contains(grade).should("be.visible");
    });

    it('Failed when add same grade that already exist', () => {
        cy.get('button').contains('Add').click();
        PayGradesPage.submitPayGrades(grade);
        cy.get('.oxd-input-group > .oxd-text').contains('Already exists').should("be.visible");
    });

    it('Delete pay grade', () => {
        cy.xpath(deletePaygradeBtn).click({force: true});
        cy.get('button').contains('Yes, Delete').click();
        cy.wait(2000);
        cy.get('div').contains(grade).should("not.exist");
    });
  })