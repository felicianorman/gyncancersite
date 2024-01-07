import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class KnowledgeService {
  constructor(private apollo: Apollo) {}

  public getKnowledge() {
    return this.apollo.watchQuery({
      query: gql`
        query getKnowledge {
          kunskaps {
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
