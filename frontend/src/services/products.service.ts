import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class ProductService {
  constructor(private apollo: Apollo) {}

  public getProducts() {
    return this.apollo.watchQuery({
      query: gql`
        query getProducts {
          products {
            data {
              attributes {
                title
                productId
                img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                price
                description
              }
            }
          }
        }
      `,
    });
  }
}
