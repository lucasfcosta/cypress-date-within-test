const TIME = new Date(2020, 8, 24, 11, 30, 0, 0);

describe("not working", () => {
  beforeEach(() => cy.clock(TIME));

  it("doesn't work", () => {
    cy.visit("https://output.jsbin.com/wolesopica");
    cy.get("h1")
      .contains(TIME.toISOString())
      .then(() => {
        expect(new Date().toISOString()).to.equal(TIME.toISOString());
      });
  });

  it("workaround", () => {
    cy.visit("https://output.jsbin.com/wolesopica");
    cy.get("h1").contains(TIME.toISOString());
    cy.clock((c) => {
      expect(new Date(c.details().now).toISOString()).to.equal(
        TIME.toISOString()
      );
    });
  });
});
