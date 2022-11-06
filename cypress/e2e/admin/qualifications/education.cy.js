import 'cypress-xpath';

const LoginPage = require('../../../page_objects/common/login_page')
const DashboardPage = require('../../../page_objects/common/dashboard_page')
const Education = require('../../../page_objects/admin/qualifications/education_page')

describe('Qualifications : Add Education', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.login('Admin', 'admin123');
        DashboardPage.clickAdminModuleMenu();
        Education.navigateToEducationPage();
    });

    let educationLvl = 'Matriculation';

    it('Able to submit new education level', () => {
        Education.addEducationLevel(educationLvl);
        // Assert count = 1
    });

    it('Able to update education level', () => {
        Education.editEducationLevel(educationLvl, 'Foundation');
        // Assert
    });

    it('Able to delete education level', () => {
        Education.addEducationLevel(educationLvl);
        Education.deleteEducation(educationLvl);
        // Assert
    });

    it('Able to cancel from adding education level', () => {
        Education.cancelAddEducationLevel(educationLvl);
        // Assert
    }); 

    it('Unable to add duplicate of skills', () => {
        Education.addEducationLevel(educationLvl);
        // Assert error msg
    });
  })