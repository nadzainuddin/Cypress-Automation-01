class SkillsPage {

    get qualificationsMenu() {
        return cy.get('span').contains('Qualifications');
    }

    get skillsSubMenu() {
        return cy.get('li').children().contains('Skills');
    }

    get addBtn() {
        return cy.get('button').contains('Add');
    }

    get nameInput() {
        return cy.get('label')
                .contains('Name')
                .parent()
                .next()
                .children();
    }

    get descriptionInput() {
        return cy.get('textarea[placeholder^="Type description"]');
    }

    get saveBtn() {
        return cy.get('button[type="submit"]');
    }

    get cancelBtn() {
        return cy.get('button').contains('Cancel');
    }

    navigateToSkillsPage() {
        this.qualificationsMenu.click();
        this.skillsSubMenu.click();
    }

    addSkills(name, description) {
        this.addBtn.click();
        cy.wait(1000);
        this.nameInput.type(name);
        this.descriptionInput.type(description);
        this.saveBtn.click();
    }

    cancelAddSkills(name, description) {
        this.addBtn.click();
        cy.wait(1000);
        this.nameInput.type(name);
        this.descriptionInput.type(description);
        this.cancelBtn.click();
    }

    editSkills(oldName, newName, newDescription) {

    }

    deleteSkills(name) {
        
    }
}

module.exports = new SkillsPage();