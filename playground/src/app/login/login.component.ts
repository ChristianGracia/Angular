import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from "./../services/hardcoded-authentication.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Username or Password';
  invalidLogin = false;



  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService
  ){}

  ngOnInit() {
   
  }

  handleLogin() {
 
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['landing', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
