import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class AboutUsService {
  constructor(private apollo: Apollo) {}

  public getAboutUs() {
    return this.apollo.watchQuery({
      query: gql`
        query getAboutUs {
          aboutUses {
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
