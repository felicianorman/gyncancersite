describe('My First Test', () => {
  it('Visits the initial project page', () => {
    // Make an API request
    cy.request({
      method: 'POST',
      url: 'http://localhost:1337/graphql',
      body: {
        query: `query getShareSite {
          lpSharesite {
            data {
              attributes {
                title
                content
              }
            }
          }
        }`,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // Handle the API response and perform actions
      const { title, content } = response.body.data.lpSharesite.data.attributes;
      cy.wait(1000);
      // Visit the site after the API request is complete
      cy.visit('/');

      // Perform actions on the visited page based on API response
      cy.contains(content);
    });
  });
});
