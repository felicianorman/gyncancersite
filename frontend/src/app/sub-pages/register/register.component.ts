import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterActions } from '../../../store/register/actions';
import * as fromStore from '../../../store/register/reducer/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public registerSuccess: boolean = false;

  constructor(private store: Store<fromStore.RegisterState>) {}

  public addUser() {
    this.store.dispatch(new RegisterActions.CreateRegister(this.form.value));
    this.registerSuccess = true;
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
