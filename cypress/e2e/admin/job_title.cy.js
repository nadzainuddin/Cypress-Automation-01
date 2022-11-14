import 'cypress-xpath';
import LoginPage from '../..//page_objects/common/login_page';
import DashboardPage from '../../page_objects/common/dashboard_page';
import TitlePage from '../../page_objects/admin/job/title_page';

const path = require('path');

describe('Verify Job Titles Page functionalities', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.login('Admin', 'admin123');
        DashboardPage.clickAdminModuleMenu();
        TitlePage.navigateToJobTitlePage();
    });

    let jobTitle = "Title2";
    let jobDesc = "This is the description of the job";
    let jobSpecFilePath = path.join('cypress', 'data', 'job_spec.txt');
    let jobTitleNote = "This is the note";
    let deleteJobTitle = "//div[text()='"+jobTitle+"']/../following-sibling::div/div[contains(@class,'actions')]//i[contains(@class,'trash')]";
    
    it('Add Job Title successfully', () => {
        TitlePage.completeJobTitleForm(jobTitle, jobDesc, jobSpecFilePath, jobTitleNote);
        TitlePage.saveJobTitle();
        TitlePage.navigateToJobTitlePage();
        cy.get('div').contains(jobTitle).should("be.visible");
    });

    it('Failed when adding job title that already exist', () => {
        TitlePage.completeJobTitleForm(jobTitle, jobDesc, jobSpecFilePath, jobTitleNote);
        TitlePage.saveJobTitle();
        cy.contains('Already exists').should("be.visible");
    });

    it('Able to delete job title', () => {
        cy.xpath(deleteJobTitle).click({force: true});
        cy.get('button').contains('Yes, Delete').click();
        cy.contains(jobTitle).should("not.exist");
    });

    it('Able to cancel adding job title', () => {
        TitlePage.completeJobTitleForm(jobTitle, jobDesc, jobSpecFilePath, jobTitleNote);
        TitlePage.cancelAddJobTitle();
        cy.contains(jobTitle).should("not.exist");
    });
  })