//Landingpage Tests

describe('Share Site API Data', () => {
  it('Visits the initial project page and fetches data from lpShare Site', () => {
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
      cy.contains(title && content);
    });
  });
});

describe('Share Site API Data', () => {
  it('Visits the initial project page and fetches data from Our Vision', () => {
    // Make an API request
    cy.request({
      method: 'POST',
      url: 'http://localhost:1337/graphql',
      body: {
        query: `query getOurVision {
          ourVision {
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
      const { title, content } = response.body.data.ourVision.data.attributes;
      cy.wait(1000);
      // Visit the site after the API request is complete
      cy.visit('/');

      // Perform actions on the visited page based on API response
      cy.contains(title);
    });
  });
});
