// import necessary modules
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private apollo: Apollo) {}

  createRegister(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createRegister($data: RegisterInput!) {
          createRegister(data: $data) {
            data {
              id
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
      variables: {
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
          region: data.region,
          role: data.role,
          email: data.email,
        },
      },
    });
  }
}
