describe("Home Page", () => {
  it("should show the elements on the home", () => {
    cy.visit(Cypress.config("baseUrl") as string);

    cy.get('[data-cy="theme-button"]').should("be.visible").and("be.enabled");

    cy.get('[data-cy="title"]').contains("Boilerplate NextJS 13");

    cy.get('[data-cy="author-name"]').contains("AstrOOnauta");
  });

  it("should redirect to the author's github", () => {
    const urlRedirects: string[] = [];

    cy.on("url:changed", (newUrl) => {
      urlRedirects.push(newUrl);
    });

    cy.visit(Cypress.config("baseUrl") as string);

    cy.get('[data-cy="author-link"]').should("have.attr", "target", "_blank");

    cy.get('[data-cy="author-link"]').invoke("removeAttr", "target").click();

    cy.then(() => {
      expect(urlRedirects).to.have.length(2);
      expect(urlRedirects[0]).to.eq(Cypress.config("baseUrl"));
      expect(urlRedirects[1]).to.eq("https://github.com/AstrOOnauta/");
    });
  });
});
