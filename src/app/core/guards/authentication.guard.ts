import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router:Router,
    private authService: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.authService.profile();
      if( token === undefined){
        return true;
      }else{
        let navegacion: string;
        if(token.rolesid === 1){
          navegacion = '/dashboard/dashboard-freelancer'
        }else{
          navegacion = '/dashboard/dashboard-collector'
        }
        this.router.navigate([navegacion]);
        return false;
      }
  }

}
