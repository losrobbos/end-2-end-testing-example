/// <reference types="Cypress" />

describe('My 1st Suite', () => {

  // load fixtures from file & load all variables
  // variables can afterwards be accessed like this: this.data.email, this.data.password, etc

  it('Login at API', () => {

    // cy.visit('https://example.cypress.io')
    cy.visit('http://127.0.0.1:8080/')
    cy.wait(2000)

    // load login data => afterwards fillout login form & submit data to API (= /login POST route)
    cy.fixture('login').then((data) => {
      // type in login data (wrong email)
      cy.get("input[type=email]").type( data.email_typo, {delay: 100} )
      cy.get("input[type=password]").type( data.password, {delay: 100} )
      cy.wait(150)
      cy.get("button").click() // submit the login form...
      cy.wait(5000)
  
      cy.get("input[type=email]").clear() // clear wrong input
      cy.get("input[type=email]").type( data.email, {delay: 100} )
      cy.wait(150)
      cy.get("button").click() // submit the login form again
      cy.wait(2000)
    })

  })
  
  // it('My first Test', () => {
  //   expect(true).to.equal(true)
  // })

  // it("My second Test", () => {
  //   expect("20").to.equal(20)
  // })

})