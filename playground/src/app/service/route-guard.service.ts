import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnaphot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnaphot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn) {

      return true;
    }
    return false;
  }
}
