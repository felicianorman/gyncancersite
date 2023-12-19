import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/registerService';

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

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
    private apolloService: RegisterService,
  ) {}

  addUser() {
    this.apolloService.createRegister(this.form.value).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl(''),
      region: new FormControl(''),
      role: new FormControl({
        drabbad: new FormControl(''),
        närstående: new FormControl(''),
        stödmedlem: new FormControl(''),
      }),
      email: new FormControl('', Validators.required),
    });
  }
}
