import { mount } from "cypress/react18";

import ThemeButton from ".";

describe("Theme Button", () => {
  it("should fires a onclick event", () => {
    const callButtonHandler = {
      buttonHandler: () => {},
    };

    mount(
      <ThemeButton
        aria-label="Toggle light-dark mode"
        onClick={cy.spy(callButtonHandler, "buttonHandler").as("buttonHandler")}
      />
    );

    cy.get('[data-cy="theme-button"]').should("be.visible").and("be.enabled");

    callButtonHandler.buttonHandler();

    cy.get("@buttonHandler").should((spy) => {
      expect(spy).to.be.called;
    });

    cy.get("@buttonHandler").should("have.been.calledOnce");
  });
});
