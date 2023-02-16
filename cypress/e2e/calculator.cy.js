describe("Calculator", () => {
    beforeEach(() => {
      cy.visit("localhost:8080/")
    })

    it("Finds buttons", () => {
        cy.get("#3").should("have.class", "calculator-button")
        cy.get("#7").should("have.class", "green-buttons")
    })
    
    it("Perform addition", () => {
        cy.get("#PWR").click()
        cy.get("#3").click()
        cy.get('button:contains("+")').click();
        cy.get("#7").click()
        cy.get('button:contains("=")').click();
        cy.get("#calculator-output").should("have.text","10")
    })
})