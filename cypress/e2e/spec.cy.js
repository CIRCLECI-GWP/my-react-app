describe("Percy Visual Test", () => {
  it("should take a Percy snapshot", () => {
    cy.visit("http://localhost:5173");
    cy.percySnapshot("Homepage");
  });
});
