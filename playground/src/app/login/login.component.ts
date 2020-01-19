import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(router: Router) {
  }

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
