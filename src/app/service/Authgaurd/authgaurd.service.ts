import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Route,Router,RouterStateSnapshot,UrlTree} from "@angular/router";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {
  perId:any
  data:any
  constructor(private router:Router,) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    next:ActivatedRouteSnapshot
  ): boolean {
    return this.checkToken(route);
  }
  canLoad(
    route: Route,
    next:ActivatedRouteSnapshot
    ): boolean {
    return this.checkToken(next);
  }

  checkToken(
    route: ActivatedRouteSnapshot,
  ) {
    this.data = JSON.parse(localStorage.getItem('data')!)
    if (this.data) {
      return this.checkAccess(route)
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }

  checkAccess(
    route: ActivatedRouteSnapshot,
  ){
    let perId = JSON.parse(localStorage.getItem('permissionId')!)
      if(perId.find(({name}:any) => name === route.data['name'])){
        console.log( perId.find(({name}:any) => name === route.data['name']))
        return true
      }
      else{
        return false
      }
    }

}


