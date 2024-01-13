import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class RehabService {
  constructor(private apollo: Apollo) {}

  public getRehab() {
    return this.apollo.watchQuery({
      query: gql`
        query getRehab {
          rehabs {
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
