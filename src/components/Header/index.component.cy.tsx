import { mount } from "cypress/react";
import GlobalContext from "~/shared/contexts/globalContext";
import Header from ".";

describe("Header", () => {
  it("should show the elements on the header", () => {
    mount(
      <GlobalContext>
        <Header title="Cypress Test" />
      </GlobalContext>
    );

    cy.get('[data-cy="title-header"]')
      .should("be.visible")
      .contains("Cypress Test");

    cy.get('[data-cy="theme-button"]').should("be.visible").and("be.enabled");
  });
});
