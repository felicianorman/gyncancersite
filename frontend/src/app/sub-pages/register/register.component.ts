import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/services/register.service';
import { RegisterActions } from 'src/store/register/actions';
import * as fromStore from '../../../store/register/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public newUser: User[] = [];
  public user: User;
  form: FormGroup;
  public registerSuccess: boolean = false;

  readonly ROOT_URL = 'http://localhost:1337/api/registers';

  constructor(
    private store: Store<fromStore.RegisterState>,
    private registerService: RegisterService,
  ) {}

  addUser() {
    this.store.dispatch(new RegisterActions.CreateRegister(this.form.value));
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
