/// <reference types="Cypress" />

describe("My Fourth Test Suite", function () {
  it("My FourthTest case", function () {
    //check boxes

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click()
    cy.get('[value = "Confirm"]')

    //window-alert

    cy.on('window:alert',(str) => {
        expect(str).to.equal(
          "Hello , share this practice page and share your knowledge"
        );
    })

    cy.on('window.confirm', (str) => {
        expect(str).to.equal( 'Hello , Are you sure you want to confirm ?')
    })
  });
});
