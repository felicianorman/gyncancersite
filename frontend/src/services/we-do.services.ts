import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class WhatWeDoServices {
  constructor(private apollo: Apollo) {}

  public getWhatWeDo() {
    return this.apollo.watchQuery({
      query: gql`
        query getWhatWeDo {
          gynekologiskCancers {
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
