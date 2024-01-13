import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class PalliativeService {
  constructor(private apollo: Apollo) {}

  public getPalliative() {
    return this.apollo.watchQuery({
      query: gql`
        query getPalliative {
          palliativVards {
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
