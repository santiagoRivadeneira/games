import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.services';


@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private validar: LoginComponent){
  
  }



  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


return true




  }

  
    
}
