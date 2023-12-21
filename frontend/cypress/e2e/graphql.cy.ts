describe('GraphQL Test', () => {
  it('should get data from GraphQL query', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:1337/graphql',
      body: {
        query: `query getRegister {
            registers {
              data {
                id
                attributes {
                  firstName
                  lastName
                  age
                  role
                  region
                  email
                }
              }
            }
          }`,
        // other parameters if needed
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
