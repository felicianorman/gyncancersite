import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class LandingPageService {
  constructor(private apollo: Apollo) {}

  public getShareSite() {
    return this.apollo.watchQuery({
      query: gql`
        query getShareSite {
          lpSharesite {
            data {
              attributes {
                title
                content
              }
            }
          }
        }
      `,
    });
  }

  public getOurVision() {
    return this.apollo.watchQuery({
      query: gql`
        query getOurVision {
          ourVision {
            data {
              attributes {
                title
                content
              }
            }
          }
        }
      `,
    });
  }
}
