/// <reference types="cypress" />

import TrelloDashboardPage from "../../pages/trello-dashboard";
import TrelloBoardPage from "../../pages/trello-board";

describe("Trello dashboard page", () => {
  const trelloDashboardPage = new TrelloDashboardPage();
  const trelloBoardPage = new TrelloBoardPage();
  const urlDashboard = "/u/lerazm931/boards";
  const newBoardName = "apollo";
  let userEmail;
  let userPassword;

  before(() => {
    userEmail = Cypress.env("TRELLO_EMAIL");
    userPassword = Cypress.env("TRELLO_PASSWORD");
  });

  beforeEach("login", () => {
    cy.login(userEmail, userPassword);
  });

  it("can create a new board", () => {
    cy.url().should("include", urlDashboard);
    trelloDashboardPage.getCreateNewBoardButton().click();
    trelloDashboardPage.getBoardTitleInput().type(newBoardName);
    trelloDashboardPage.getBoardSubmitButtom().click();

    //verify redirect
    cy.url().should("include", newBoardName);
    trelloBoardPage.getBoardNameDisplay().contains(newBoardName);
  });

  after("teardown - delete the board", () => {
    cy.visit(urlDashboard);
    trelloDashboardPage.getBoardTileDetails().contains(newBoardName).click();
    cy.url().should("include", newBoardName);

    //teardown
    trelloBoardPage.clickMenuLink();
    trelloBoardPage.clickCloseBoardLink();
    trelloBoardPage.clickPopUpCloseButton();
    trelloBoardPage.clickDeleteButton();
    trelloBoardPage.clickDeleteConfirmationButton();
  });
});
