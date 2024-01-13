import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class closeRelativeService {
  constructor(private apollo: Apollo) {}

  public getCloseRelative() {
    return this.apollo.watchQuery({
      query: gql`
        query getCloseRelative {
          foerNaerstaendes {
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
