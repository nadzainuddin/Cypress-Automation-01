import AdminPage from '../../common/admin_page';

class TitlePage {
    get jobTitleMenu() {
        return cy.get('a').contains('Job Titles');
    }

    get addJobTitleBtn() {
        return cy.get('button').contains('Add');
    }

    get jobTitleInput() {
        return cy.get('label').contains('Job Title').parent('div')
            .siblings('div').children('input');
    }

    get jobDescriptionInput() {
        return cy.get('label').contains('Job Description').parent('div')
            .siblings('div').children('textarea');
    }

    get browseJobSpecBtn() {
        return cy.contains('Browse');
    }

    get jobTitleFileInput() {
        return cy.get('input[type="file"]');
    }

    get jobTitleNoteInput() {
        return cy.get('label').contains('Note').parent('div')
            .siblings('div').children('textarea');
    }

    get saveJobTitleBtn() {
        return cy.get('button').contains('Save');
    }

    get cancelJobTitleBtn() {
        return cy.get('button').contains('Cancel');
    } 

    navigateToJobTitlePage() {
        AdminPage.jobMenu.click();
        this.jobTitleMenu.click();
    }

    completeJobTitleForm(jobTitle, jobDesc, jobSpecFilePath, jobTitleNote) {
        this.addJobTitleBtn.click();
        this.jobTitleInput.type(jobTitle);
        this.jobDescriptionInput.type(jobDesc);
        this.jobTitleFileInput.selectFile(jobSpecFilePath, {force: true});
        this.browseJobSpecBtn.click();
        this.jobTitleNoteInput.type(jobTitleNote);
    }

    saveJobTitle() {
        this.saveJobTitleBtn.click();
    }

    cancelAddJobTitle() {
        this.cancelJobTitleBtn.click();
    }
}

module.exports = new TitlePage();