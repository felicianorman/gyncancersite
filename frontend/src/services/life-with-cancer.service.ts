import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class LifeWithCancerService {
  constructor(private apollo: Apollo) {}

  public getLifeWithCancer() {
    return this.apollo.watchQuery({
      query: gql`
        query getLifeWithCancer {
          donates {
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
