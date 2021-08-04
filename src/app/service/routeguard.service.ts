import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate , Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private authen: HardcodedauthenticationService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authen.isuserloggedin()){
          return true;
      }else{
        this.router.navigate(['login'])
        return false;
      }
  }

}
