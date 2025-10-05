import { mount } from "cypress/react";
import GlobalContext from "~/shared/contexts/globalContext";
import Footer from ".";

describe("Footer", () => {
  const authorLinkElement = '[data-cy="author-link"]';

  it("should show the elements on the footer", () => {
    mount(
      <GlobalContext>
        <Footer />
      </GlobalContext>
    );

    cy.get('[data-cy="footer-text"]').contains("Powered by");

    cy.get('[data-cy="author-name"]').contains("AstrOOnauta");

    cy.get(authorLinkElement).should("be.visible").and("not.be.disabled");
  });

  it("should fires a onclick event ", () => {
    mount(
      <GlobalContext>
        <Footer />
      </GlobalContext>
    );
    let linkCalled = false;

    cy.get(authorLinkElement)
      .trigger("click")
      .then(() => {
        linkCalled = true;
      });

    cy.wait(100).then(() => {
      expect(linkCalled).to.eq(true);
    });
  });

  it("should redirect to the author's github", () => {
    const urlRedirects: string[] = [];

    mount(
      <GlobalContext>
        <Footer />
      </GlobalContext>
    );

    cy.on("url:changed", (newUrl) => {
      urlRedirects.push(newUrl);
    });

    cy.get(authorLinkElement).should("have.attr", "target", "_blank");

    cy.get(authorLinkElement).invoke("removeAttr", "target").click();

    cy.then(() => {
      expect(urlRedirects).to.have.length(1);
      expect(urlRedirects[0]).to.eq("https://github.com/AstrOOnauta/");
    });
  });
});
