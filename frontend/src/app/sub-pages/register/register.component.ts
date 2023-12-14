import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public newUser: User[] = [];
  form: FormGroup;

  addUser() {
    console.log(this.form.value);
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
