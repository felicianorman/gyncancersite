import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable()
export class RegisterService {
  constructor(private apollo: Apollo) {}

  public createRegisterUser() {
    return this.apollo.mutate({
      mutation: gql`
        mutation createRegister($data: RegisterInput!) {
          createRegister(data: $data) {
            data {
              attributes {
                firstName
                lastName
                age
                region
                role
                email
              }
            }
          }
        }
      `,
    });
  }
}
