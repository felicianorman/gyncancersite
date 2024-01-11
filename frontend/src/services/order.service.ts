import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class OrderService {
  constructor(private apollo: Apollo) {}

  public createOrder() {
    return this.apollo.mutate({
      mutation: gql`
        mutation createOrder($data: OrderInput!) {
          createOrder(data: $data) {
            data {
              attributes {
                firstName
                lastName
                address
                email
                products
              }
            }
          }
        }
      `,
    });
  }
}
