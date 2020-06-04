import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CustomCookieService} from "../../services/custom-cookie.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!this.cookieService.getCookie('jwt');
  }

  constructor(private cookieService:CustomCookieService) {

  }

  canLoad(next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }


}
