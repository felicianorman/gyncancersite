import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class LifeAfterCancerService {
  constructor(private apollo: Apollo) {}

  public getLifeAfterCancer() {
    return this.apollo.watchQuery({
      query: gql`
        query getLifeAfterCancer {
          livetEfterCancers {
            data {
              attributes {
                title
                content
                img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }
}
