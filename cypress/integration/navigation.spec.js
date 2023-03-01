/* eslint-disable no-undef */

beforeEach (() => {
  cy.request("GET", "/api/debug/reset");
  
  cy.visit('/');

});

describe("Navigation", () => {
  it("should visit root", () => {

  });

  it("should navigate to Tuesday", () => {

    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected")
      
  });

});
