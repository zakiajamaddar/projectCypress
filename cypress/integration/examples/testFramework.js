/// <reference types="Cypress" />

describe("My Test Suite", function ()
{
    before(function(){
        cy.fixture('example').then(function(data){
        this.data = data
        })

    })
  it("My Test case", function () {
    //check boxes

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name= "name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get(":nth-child(4) > .ng-untouched").should('have.value',this.data .name);
    cy.get('input[name= "name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get(":nth-child(7) > :nth-child(4) > .form-check-label");
    cy.get('#inlineRadio3').should('be.disabled')
    cy.pause()
    cy.get(":nth-child(2) > .nav-link").click();
    
    this.data.productName.forEach(function(element){
    cy.selectProduct(element)
    })
    
  });
});
