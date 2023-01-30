/// <reference types="Cypress" />

describe("My Sixth Test Suite", function () {
  it("My SixthTest case", function () {
    //check boxes

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')
    
  })
});
