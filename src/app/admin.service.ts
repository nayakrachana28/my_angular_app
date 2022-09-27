import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public authSubject=new Subject<boolean>();

  validateAuth_admin(data:boolean){
    this.authSubject.next(data);
  }

  value?:boolean;
  getAuthStatus_Admin(){
    this.authSubject.subscribe(
      data=>{
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }

  constructor() { }
}
