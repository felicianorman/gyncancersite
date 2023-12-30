import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class SupportUsService {
  constructor(private apollo: Apollo) {}

  public getSupportUs() {
    return this.apollo.watchQuery({
      query: gql`
        query getSupportUs {
          supportUs {
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

  public getSupportUsInfo() {
    return this.apollo.watchQuery({
      query: gql`
        query getSupportUsInfo {
          supportUsInfo {
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
