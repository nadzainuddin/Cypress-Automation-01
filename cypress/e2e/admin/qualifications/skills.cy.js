import 'cypress-xpath';

const LoginPage = require('../../../page_objects/common/login_page')
const DashboardPage = require('../../../page_objects/common/dashboard_page')
const Skills = require('../../../page_objects/admin/qualifications/skills_page')

describe('Qualifications : Add Skills', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
        LoginPage.login('Admin', 'admin123');
        DashboardPage.clickAdminModuleMenu();
        Skills.navigateToSkillsPage();
    });

    let skillsName = 'Python', description = 'Programming Language';

    it('Able to submit new skills', () => {
        Skills.addSkills(skillsName, description);
        // Assert count = 1
    });

    it('Able to update skills details', () => {
        Skills.editSkills(skillsName, 'React', 'Javascript lib');
        // Assert
    });

    it('Able to delete skills', () => {
        Skills.addSkills(skillsName, description);
        Skills.deleteSkills(skillsName);
        // Assert
    });

    it('Able to cancel from adding skills', () => {
        Skills.cancelAddSkills(skillsName, description);
        // Assert
    }); 

    it('Unable to add duplicate of skills', () => {
        Skills.addSkills(skillsName, description);
        // Assert error msg
    });
  })