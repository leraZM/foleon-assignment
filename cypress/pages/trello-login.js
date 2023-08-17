class TrelloLoginPage {
  visit() {
    cy.visit("/login");
  }

  typeEmail(email) {
    return cy.get("#user").type(email);
  }

  typePassword(password) {
    return cy.get("#password").type(password);
  }

  getErrorMessage() {
    return cy.get(".error-message");
  }

  clickGoogleLoginButton() {
    return cy.get("#googleButton").click();
  }

  clickMsLoginButton() {
    return cy.get("#msftButton").click();;
  }

  clickAppleLoginButton() {
    return cy.get("#signInWithAppleButton").click();;
  }

  clickSlackLoginButton() {
    return cy.get("#slackButton").click();;
  }

  clickContinueLoginButton() {
    return cy.get("#login").click();;
  }

  clickSubmitButton() {
    return cy.get("#login").click();;
  }
}

export default TrelloLoginPage;
