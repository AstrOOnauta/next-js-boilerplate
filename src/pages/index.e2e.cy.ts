describe("Home Page", () => {
  it("should show the elements on the home", () => {
    cy.visit(Cypress.config("baseUrl") as string);

    cy.get('[data-cy="title"]').contains("Boilerplate Next JS");
  });
});
