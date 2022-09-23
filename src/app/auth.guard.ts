import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//Import User Services for Authentication
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated:boolean=false;
  //constructor of userservices

  constructor(private authservice:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isAuthenticated=this.authservice.authSubject.subscribe(
       data=>
       {
        console.log('next subscribed value: '+data);
        this.isAuthenticated=data;
       } 
      )
      if(this.isAuthenticated==false){
        console.log('inside false '+this.isAuthenticated);
        this.router.navigate(['/login']);
        return false;
      }else{
        console.log('next subscribed value:t3etg ' + this.isAuthenticated);
        return true;
      }
    
  }
  
}
