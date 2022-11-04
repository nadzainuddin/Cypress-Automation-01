import 'cypress-xpath';

describe('Job : Pay Grades functionalities', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[class*=orangehrm-login-button]').click();
        cy.get('a[href*="viewAdminModule"]').click();
        cy.get('span').contains('Job').click();
        cy.get('a').contains('Pay Grades').click();
    });

    const grade = 'Grade 111';
    
    it('Add Pay Grades successfully', () => {
        cy.get('button').contains('Add').click();
        cy.get('label')
            .contains('Name')
            .parent('div')
            .siblings('div')
            .children('input')
            .type(grade);
        cy.get('button[type="submit"]').click();
        cy.wait(5000);
        cy.get('h6')
            .contains('Currencies')
            .siblings('button')
            .contains('Add').click();
        cy.get('div').contains('Select').click();
        cy.get('div').contains('Sri Lanka Rupee').click();
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
        cy.get('span').contains('Job').click();
        cy.get('a').contains('Pay Grades').click();
        cy.get('div').contains(grade).should("be.visible");
        //Verify toast message : Commented as 
        //unable to assert as toast disappear immediately
        // cy.get('p[class*="toast"]').invoke('text')
        //     .then((text)=>{
        //         const toastText = text;
        //         expect(toastText).to.equal("Success")})
        // cy.get('button[type="submit"]').click()
        //     .then(() => {
        //         expect(stub.getCall(0)).to.be.calledWith('Success')      
        // })  
    });

    it('Failed when add same grade that already exist', () => {
        cy.get('button').contains('Add').click();
        cy.get('label')
            .contains('Name')
            .parent('div')
            .siblings('div')
            .children('input')
            .type(grade);
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-input-group > .oxd-text').contains('Already exists').should("be.visible");
    });

    it('Delete pay grade', () => {
        cy.xpath("//div[text()='"+grade+"']/../following-sibling::div/div[contains(@class,'actions')]//i[contains(@class,'trash')]").click();
        // cy.get('div')
        //     .contains(grade)
        //     .parent('div')
        //     .siblings('div')
        //     .children('button:nth-child(1)').children('i[class*="trash"]').click();
        cy.get('button').contains('Yes, Delete').click();
        cy.wait(2000);
        cy.get('div').contains(grade).should("not.exist");
    });
  })