class TrelloBoardPage {
  getBoardNameDisplay() {
    return cy.get('[data-testid="board-name-display"]');
  }

  clickMenuLink() {
    return cy.get('[data-testid="board-name-display"]').click();
  }

  clickCloseBoardLink() {
    return cy.get("a").contains("Close board").click({ force: true });
  }

  clickPopUpCloseButton() {
    return cy
      .get(".pop-over-content > :nth-child(1) > div > [data-testid]")
      .click();
  }

  clickDeleteButton() {
    return cy.get('[data-testid="close-board-delete-board-button"]').click();
  }

  clickDeleteConfirmationButton() {
    return cy
      .get('[data-testid="close-board-delete-board-confirm-button"]')
      .click();
  }
}

export default TrelloBoardPage;
