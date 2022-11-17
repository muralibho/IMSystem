import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  canActivate()
     {
      if(sessionStorage.getItem("IMSystem-token"))
      {
        return true;
      }
      else{
        alert("you need to login to access this page");
        return false;
      }
    }
  }
  

