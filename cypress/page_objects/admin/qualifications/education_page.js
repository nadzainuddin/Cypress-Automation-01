class EducationPage {
    get addEducationBtn() {
        return cy.get('');
    }

    get educationLevelInput() {
        return cy.get('');
    }

    get saveBtn() {
        return cy.get('');
    }

    get cancelBtn() {
        return cy.get('');
    }

    addEducationLevel(educationLvl) {
        this.addEducationBtn.click();
        this.educationLevelInput.type(educationLvl);
    }

    updateEducationLevel(oldEducationLvl, newEducationLvl) {
        
    }

    deleteEducationLevel(oldEducationLvl) {
        
    }
}

module.exports = new EducationPage();