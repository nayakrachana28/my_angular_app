import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  isAuthenticated:boolean=false;

  constructor(private authservice:AdminService,private router:Router){}
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
