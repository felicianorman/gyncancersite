import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class PatientStoriesService {
  constructor(private apollo: Apollo) {}

  public getBlog() {
    return this.apollo.watchQuery({
      query: gql`
        query getStories {
          stories {
            data {
              attributes {
                title
                preview
                img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                body
                author
              }
            }
          }
        }
      `,
    });
  }
}
