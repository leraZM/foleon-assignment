/// <reference types="cypress" />

import { REDIRECT_ORIGINS } from "./constants";
import TrelloLoginPage from "../../pages/trello-login";

describe("Trello board login page", () => {
  const trelloLogin = new TrelloLoginPage();
  const urlDashboard = "/boards";
  let userEmail;
  let userPassword;

  before(() => {
    userEmail = Cypress.env("TRELLO_EMAIL");
    userPassword = Cypress.env("TRELLO_PASSWORD");
  });

  beforeEach(() => {
    trelloLogin.visit();
  });

  it("can login with valid credentials", () => {
    cy.login(userEmail, userPassword);

    //verify redirect
    cy.url().should("include", urlDashboard);
  });

  it("can display error messages when credentials are invalid", () => {
    trelloLogin.typeEmail("invalid@email.com");
    trelloLogin.clickContinueLoginButton();
    trelloLogin.typePassword("invaidPa$$word");
    trelloLogin.clickSubmitButton();
    trelloLogin.getErrorMessage().should("be.visible");
  });

  it("can initiate Google login", () => {
    trelloLogin.clickGoogleLoginButton();

    //allow redirect and verify url
    cy.origin(
      REDIRECT_ORIGINS.GOOGLE,
      { args: { REDIRECT_ORIGINS } },
      (url) => {
        cy.url().should("include", url.REDIRECT_ORIGINS.GOOGLE);
      }
    );
  });

  it("can initiate Microsoft login", () => {
    trelloLogin.clickMsLoginButton();

    //allow redirect and verify url
    cy.origin(REDIRECT_ORIGINS.MS, { args: { REDIRECT_ORIGINS } }, (url) => {
      cy.url().should("include", url.REDIRECT_ORIGINS.MS);
    });
  });

  it("can initiate Apple login", () => {
    trelloLogin.clickAppleLoginButton();

    //allow redirect and verify url
    cy.origin(REDIRECT_ORIGINS.APPLE, { args: { REDIRECT_ORIGINS } }, (url) => {
      cy.url().should("include", url.REDIRECT_ORIGINS.APPLE);
    });
  });

  it("can initiate Slack login", () => {
    trelloLogin.clickSlackLoginButton();

    //allow redirect and verify url
    cy.origin(REDIRECT_ORIGINS.SLACK, { args: { REDIRECT_ORIGINS } }, (url) => {
      cy.url().should("include", url.REDIRECT_ORIGINS.SLACK);
    });
  });

  context("API Tests", () => {
    it("can display an error when there is no internet connection", () => {
      cy.intercept("POST", "https://id.atlassian.com/rest/authenticate**", {
        statusCode: 500,
        body: { message: "Stubbed with 500 status code" },
      }).as("loginRequest");

      cy.login(userEmail, userPassword);
      cy.wait("@loginRequest");

      cy.origin(REDIRECT_ORIGINS.ATLASSIAN, () => {
        cy.get('[data-testid="form-error"]').should("be.visible");
      });
    });
  });
});
