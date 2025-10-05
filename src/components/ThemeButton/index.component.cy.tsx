import { mount } from "cypress/react";
import GlobalContext from "~/shared/contexts/globalContext";
import ThemeButton from ".";

describe("Theme Button", () => {
  it("should fires a onclick event", () => {
    const callButtonHandler = {
      buttonHandler: () => {},
    };

    mount(
      <GlobalContext>
        <ThemeButton
          aria-label="Toggle light-dark mode"
          onClick={cy
            .spy(callButtonHandler, "buttonHandler")
            .as("buttonHandler")}
        />
      </GlobalContext>
    );

    cy.get('[data-cy="theme-button"]').should("be.visible").and("be.enabled");

    callButtonHandler.buttonHandler();

    cy.get("@buttonHandler").should("have.been.called");

    cy.get("@buttonHandler").should("have.been.calledOnce");
  });
});
