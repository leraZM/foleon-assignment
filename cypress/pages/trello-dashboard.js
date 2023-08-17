class TrelloDashboardPage {
  getCreateNewBoardButton() {
    return cy.get('[data-testid="create-board-tile"] > .board-tile');
  }

  getBoardTitleInput() {
    return cy.get('[data-testid="create-board-title-input"]');
  }

  getBoardSubmitButtom() {
    return cy.get('[data-testid="create-board-submit-button"]');
  }

  getBoardTileDetails() {
    return cy.get(".board-tile > .board-tile-details");
  }
}

export default TrelloDashboardPage;
