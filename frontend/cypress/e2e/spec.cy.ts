describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Ingen ska dö i cancer - kunskap räddar liv');
  });
});
