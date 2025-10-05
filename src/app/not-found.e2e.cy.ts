describe("Not Found", () => {
  const notFoundUrl = `${Cypress.config("baseUrl")}/404-page-not-found`;
  const goToHomeLink = '[data-cy="go-to-home-link"]';

  it("should show the elements on the 404 page not found", () => {
    cy.visit(notFoundUrl, {
      failOnStatusCode: false,
    });

    cy.get('[data-cy="oops-text"]').contains("Oops...");
    cy.get('[data-cy="404-text"]').contains("404");
    cy.get('[data-cy="page-not-found-text"]').contains("Page not found");
    cy.get(goToHomeLink).should("be.visible").and("not.be.disabled");
    cy.get('[data-cy="go-to-home-button"]')
      .should("be.visible")
      .contains("Go to home");
  });

  it("should the button go to home fires a onclick event", () => {
    let linkCalled = false;

    cy.visit(notFoundUrl, {
      failOnStatusCode: false,
    });

    cy.get(goToHomeLink)
      .click()
      .then(() => {
        linkCalled = true;
      });

    cy.wait(100).then(() => {
      expect(linkCalled).to.eq(true);
    });
  });

  it("should the link go to home redirect to home page", () => {
    cy.visit(notFoundUrl, {
      failOnStatusCode: false,
    });

    cy.get(goToHomeLink).click();

    cy.location("pathname").should("eq", "/");
  });
});
