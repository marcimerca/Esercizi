import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: NgForm;
  user = {
    username: '',
    password: '',
  };
  username = '';
  password = '';
  logged: boolean = false;

  submit(form: NgForm) {
    console.log(form.value);
  }
}
