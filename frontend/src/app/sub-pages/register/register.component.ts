import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { User } from 'src/app/models/User';

const NEW_USER = gql`
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
`;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public newUser: User[] = [];
  public user: User;
  form: FormGroup;

  readonly ROOT_URL = 'http://localhost:1337/api/registers';

  constructor(private apollo: Apollo) {}

  addUser() {
    this.apollo
      .mutate({
        mutation: NEW_USER,
        variables: {
          data: {
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            age: this.form.value.age,
            region: this.form.value.region,
            role: this.form.value.role,
            email: this.form.value.email,
          },
        },
      })
      .subscribe(
        ({ data }) => {
          // Handle success, if needed
          console.log('User added successfully', data);
        },
        (error) => {
          // Handle error
          console.error('Error adding user', error);
        },
      );
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl(''),
      region: new FormControl(''),
      role: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }
}
