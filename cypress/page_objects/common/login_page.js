class LoginPage {

    get usernameInput() {
        return cy.get('input[name="username"]');
    }

    get passwordInput() {
        return cy.get('input[name="password"]');
    }

    get loginBtn() {
        return cy.get('button[class*=orangehrm-login-button]');
    }

    clickLoginBtn() {
        loginBtn.click();
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }
}

module.exports = new LoginPage();