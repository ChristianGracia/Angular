import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'Username';
  password = '********';
  errorMessage = 'Invalid Username or Password';
  invalidLogin = false;


  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    if (this.username === 'john' && this.password === 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
